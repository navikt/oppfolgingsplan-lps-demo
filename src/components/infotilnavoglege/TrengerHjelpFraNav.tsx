import React from "react";
import {
  Controller,
  useController,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const TrengerHjelpFraNav = () => {
  const { globalFormState } = useGlobalState();

  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const mottakerValue = useWatch({ control, name: "mottaker" });
  const trengerHjelpFraNavValue = useWatch({
    control,
    name: "trengerHjelpFraNav",
  });

  const hasSelectedSendTilNAV = () => {
    if (
      mottakerValue &&
      Array.isArray(mottakerValue) &&
      mottakerValue.length > 0
    ) {
      return mottakerValue.includes("NAV");
    }
    return (
      globalFormState.infoTilNavOgLegeFormFields.mottaker?.includes("NAV") ??
      false
    );
  };

  const hasSelectedTrengerHjelpFraNAV = () => {
    if (
      trengerHjelpFraNavValue !== null &&
      trengerHjelpFraNavValue !== undefined
    ) {
      return trengerHjelpFraNavValue === true;
    }
    return (
      globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav === true
    );
  };

  const trengerHjelpFraNavBeskrivelse = useController({
    name: "trengerHjelpFraNavBeskrivelse",
    control,
    defaultValue:
      globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNavBeskrivelse,
    rules: {
      validate: (value) => {
        if (
          hasSelectedSendTilNAV() &&
          hasSelectedTrengerHjelpFraNAV() &&
          !value
        ) {
          return "Feltet er påkrevd";
        }
        return true;
      },
    },
  });

  if (hasSelectedSendTilNAV()) {
    return (
      <>
        <Controller
          name="trengerHjelpFraNav"
          defaultValue={
            globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav
          }
          rules={{
            validate: (value: boolean | null) => {
              if (value == null) {
                return "Du må oppgi om dere trenger hjelp fra NAV eller ikke";
              }
              return true;
            },
          }}
          control={control}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <RadioGroup
              id="needsHelpFromNav"
              legend={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
              description="For eksempel om dere ønsker et dialogmøte i regi av NAV, eller har behov for hjelpemidler"
              onBlur={onBlur}
              onChange={(val) => onChange(val === "true")}
              error={fieldState.error?.message}
              ref={ref}
              value={value === null || value === undefined ? "" : String(value)}
            >
              <Radio value="true">Ja</Radio>
              <Radio value="false">Nei</Radio>
            </RadioGroup>
          )}
        />

        {hasSelectedTrengerHjelpFraNAV() && (
          <Textarea
            id="needsHelpFromNavDescription"
            label={
              fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
            }
            {...trengerHjelpFraNavBeskrivelse.field}
            value={trengerHjelpFraNavBeskrivelse.field.value ?? ""}
            error={trengerHjelpFraNavBeskrivelse.fieldState.error?.message}
          />
        )}
      </>
    );
  }
  return null;
};
