import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const Mottaker = () => {
  const { globalFormState } = useGlobalState();

  const { control, formState } = useFormContext<InfoTilNavOgLegeFormFields>();
  const { errors } = formState;

  return (
    <Controller
      name="mottaker"
      defaultValue={globalFormState.infoTilNavOgLegeFormFields.mottaker || []}
      rules={{
        validate: (value: string[]) => {
          if (!value || value.length === 0) {
            return "Du må velge hvem planen skal deles med";
          }
          return true;
        },
      }}
      control={control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
        <CheckboxGroup
          legend={fieldTexts.kommunikasjonTexts.mottaker}
          description="Oppfølgingsplanen skal sendes til fastlegen senest innen det har gått 4 uker av sykefraværet, og sendes til NAV i forkant av et dialogmøte eller når NAV ber om det.
          Dere kan også sende inn planen når dere har behov for det på andre tidspunkt"
          onBlur={onBlur}
          onChange={onChange}
          error={fieldState.error?.message}
          ref={ref}
          value={value}
        >
          <Checkbox id="sendPlanToGeneralPractitioner" value="LEGE">
            Fastlege
          </Checkbox>
          <Checkbox id="sendPlanToNav" value="NAV">
            NAV
          </Checkbox>
        </CheckboxGroup>
      )}
    />
  );
};
