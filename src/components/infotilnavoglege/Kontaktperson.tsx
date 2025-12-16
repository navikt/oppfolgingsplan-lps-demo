import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { TextField } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const Kontaktperson = () => {
  const { globalFormState } = useGlobalState();

  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const kontaktpersonNavn = useController({
    name: "kontaktpersonNavn",
    control,
    defaultValue: globalFormState.infoTilNavOgLegeFormFields.kontaktpersonNavn,
    rules: { required: "Feltet er påkrevd" },
  });

  const kontaktpersonTelefonnummer = useController({
    name: "kontaktpersonTelefonnummer",
    control,
    defaultValue:
      globalFormState.infoTilNavOgLegeFormFields.kontaktpersonTelefonnummer,
    rules: { required: "Feltet er påkrevd" },
  });

  const kontaktpersonEpost = useController({
    name: "kontaktpersonEpost",
    control,
    defaultValue: globalFormState.infoTilNavOgLegeFormFields.kontaktpersonEpost,
    rules: { required: "Feltet er påkrevd" },
  });

  return (
    <>
      <TextField
        id="contactPersonFullName"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
        description="Den som har ansvaret for å følge opp den ansatte, som for eksempel nærmeste leder eller kontaktperson hos HR"
        {...kontaktpersonNavn.field}
        value={kontaktpersonNavn.field.value ?? ""}
        error={kontaktpersonNavn.fieldState.error?.message}
      />

      <TextField
        id="contactPersonPhoneNumber"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
        {...kontaktpersonTelefonnummer.field}
        value={kontaktpersonTelefonnummer.field.value ?? ""}
        error={kontaktpersonTelefonnummer.fieldState.error?.message}
      />

      <TextField
        id="contactPersonEmail"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonEpost}
        {...kontaktpersonEpost.field}
        value={kontaktpersonEpost.field.value ?? ""}
        error={kontaktpersonEpost.fieldState.error?.message}
      />
    </>
  );
};
