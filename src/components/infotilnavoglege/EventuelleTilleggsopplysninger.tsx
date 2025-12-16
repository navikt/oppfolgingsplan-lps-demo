import { optionalText } from "@/text/textUtils";
import { fieldTexts } from "@/text/fieldTexts";
import { Textarea } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { useFormContext } from "react-hook-form";
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
