import { useFormContext } from "react-hook-form";
import { Textarea } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const EventuelleTilleggsopplysninger = () => {
  const { globalFormState } = useGlobalState();

  const { register } = useFormContext<InfoTilNavOgLegeFormFields>();

  return (
    <Textarea
      id="additionalInformation"
      label={optionalText(fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger)}
      {...register("utfyllendeOpplysninger")}
      defaultValue={
        globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger
      }
    />
  );
};
