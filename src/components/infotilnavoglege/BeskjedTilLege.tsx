import { useController, useFormContext, useWatch } from "react-hook-form";
import { Textarea } from "@navikt/ds-react";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const BeskjedTilLege = () => {
  const { globalFormState } = useGlobalState();

  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const beskjedTilFastlege = useController({
    name: "beskjedTilFastlege",
    control,
    defaultValue: globalFormState.infoTilNavOgLegeFormFields.beskjedTilFastlege,
  });

  const mottakerValue = useWatch({ control, name: "mottaker" });

  const hasSelectedSendTilLege = () => {
    if (
      mottakerValue &&
      Array.isArray(mottakerValue) &&
      mottakerValue.length > 0
    ) {
      return mottakerValue.includes("LEGE");
    }
    return (
      globalFormState.infoTilNavOgLegeFormFields.mottaker?.includes("LEGE") ??
      false
    );
  };

  if (hasSelectedSendTilLege()) {
    return (
      <Textarea
        id="messageToGeneralPractitioner"
        label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
        {...beskjedTilFastlege.field}
        value={beskjedTilFastlege.field.value ?? ""}
      />
    );
  }
  return null;
};
