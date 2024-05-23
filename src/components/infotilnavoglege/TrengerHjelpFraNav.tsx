import { Controller, useFormContext } from "react-hook-form";
import { Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { useGlobalState } from "@/state/appState";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const TrengerHjelpFraNav = () => {
  const { globalFormState } = useGlobalState();

  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext<InfoTilNavOgLegeFormFields>();

  const mottakerValue = watch("mottaker");
  const trengerHjelpFraNavValue = watch("trengerHjelpFraNav");

  const hasSelectedSendTilNAV = () => {
    if (mottakerValue === null || mottakerValue === undefined) {
      return globalFormState.infoTilNavOgLegeFormFields.mottaker?.includes(
        "NAV",
      );
    }
    return mottakerValue?.includes("NAV");
  };

  const hasSelectedTrengerHjelpFraNAV = () => {
    if (trengerHjelpFraNavValue === null) {
      return (
        globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav === true
      );
    }
    return trengerHjelpFraNavValue === true;
  };

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
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <RadioGroup
              id="needsHelpFromNav"
              legend={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
              description="For eksempel om dere ønsker et dialogmøte i regi av NAV, eller har behov for hjelpemidler"
              onBlur={onBlur}
              onChange={onChange}
              error={errors.trengerHjelpFraNav?.message}
              ref={ref}
              value={value}
            >
              <Radio value={true}>Ja</Radio>
              <Radio value={false}>Nei</Radio>
            </RadioGroup>
          )}
        />

        {hasSelectedTrengerHjelpFraNAV() && (
          <Textarea
            id="needsHelpFromNavDescription"
            label={
              fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
            }
            {...register("trengerHjelpFraNavBeskrivelse", {
              required: "Feltet er påkrevd",
            })}
            defaultValue={
              globalFormState.infoTilNavOgLegeFormFields
                .trengerHjelpFraNavBeskrivelse
            }
            error={errors.trengerHjelpFraNavBeskrivelse?.message}
          />
        )}
      </>
    );
  }
};
