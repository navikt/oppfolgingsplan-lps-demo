import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";

export const EventuelleTilleggsopplysninger = () => {
  const { globalFormState } = useGlobalState();

  return (
    <ControlledTextarea
      name="utfyllendeOpplysninger"
      label={optionalText(fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger)}
      defaultValue={
        globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger
      }
    />
  );
};
