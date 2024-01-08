import { TextField } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { useGlobalState } from "@/state/appState";
import { useFormContext } from "react-hook-form";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const Kontaktperson = () => {
  const { globalFormState } = useGlobalState();

  const {
    register,
    formState: { errors },
  } = useFormContext<InfoTilNavOgLegeFormFields>();

  return (
    <>
      <TextField
        label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
        description="Den som har ansvaret for å følge opp den sykmeldte, som for eksempel nærmeste leder eller kontaktperson hos HR"
        {...register("kontaktpersonNavn", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.kontaktpersonNavn
        }
        error={errors.kontaktpersonNavn?.message}
      />

      <TextField
        label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
        {...register("kontaktpersonTelefonnummer", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.kontaktpersonTelefonnummer
        }
        error={errors.kontaktpersonTelefonnummer?.message}
      />
    </>
  );
};
