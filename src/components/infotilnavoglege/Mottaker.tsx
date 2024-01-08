import { Checkbox, CheckboxGroup } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";

export const Mottaker = () => {
  const { globalFormState } = useGlobalState();

  const {
    control,
    formState: { errors },
  } = useFormContext<InfoTilNavOgLegeFormFields>();

  return (
    <Controller
      name="mottaker"
      defaultValue={globalFormState.infoTilNavOgLegeFormFields.mottaker || []}
      rules={{ required: "Du må velge hvem planen skal deles med" }}
      control={control}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <CheckboxGroup
          legend={fieldTexts.kommunikasjonTexts.mottaker}
          onBlur={onBlur}
          onChange={onChange}
          error={errors.mottaker?.message}
          ref={ref}
          value={value}
        >
          <Checkbox value="LEGE">Fastlege</Checkbox>
          <Checkbox value="NAV">NAV</Checkbox>
        </CheckboxGroup>
      )}
    />
  );
};
