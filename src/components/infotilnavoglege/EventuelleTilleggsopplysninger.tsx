import { useController, useFormContext } from "react-hook-form";
import { Textarea } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const EventuelleTilleggsopplysninger = () => {
  const { globalFormState } = useGlobalState();

  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const utfyllendeOpplysninger = useController({
    name: "utfyllendeOpplysninger",
    control,
    defaultValue:
      globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger,
  });

  return (
    <Textarea
      id="additionalInformation"
      label={optionalText(fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger)}
      {...utfyllendeOpplysninger.field}
      value={utfyllendeOpplysninger.field.value ?? ""}
    />
  );
};
