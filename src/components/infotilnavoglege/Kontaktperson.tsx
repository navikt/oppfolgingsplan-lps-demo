import { ControlledTextField } from "@/components/form/ControlledTextField";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";

export const Kontaktperson = () => {
  const { globalFormState } = useGlobalState();

  return (
    <>
      <ControlledTextField
        name="kontaktpersonNavn"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
        description="Den som har ansvaret for å følge opp den ansatte, som for eksempel nærmeste leder eller kontaktperson hos HR"
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.kontaktpersonNavn
        }
        rules={{ required: "Feltet er påkrevd" }}
      />
      <ControlledTextField
        name="kontaktpersonTelefonnummer"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.kontaktpersonTelefonnummer
        }
        rules={{ required: "Feltet er påkrevd" }}
      />
      <ControlledTextField
        name="kontaktpersonEpost"
        label={fieldTexts.kommunikasjonTexts.kontaktpersonEpost}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.kontaktpersonEpost
        }
        rules={{ required: "Feltet er påkrevd" }}
      />
    </>
  );
};
