import { useFormContext, useWatch } from "react-hook-form";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const BeskjedTilLege = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();
  const mottakerValue = useWatch({ control, name: "mottaker" });

  const hasSelectedSendTilLege =
    mottakerValue &&
    Array.isArray(mottakerValue) &&
    mottakerValue.includes("LEGE");

  if (!hasSelectedSendTilLege) {
    return null;
  }

  return (
    <ControlledTextarea
      name="beskjedTilFastlege"
      label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
      defaultValue={
        globalFormState.infoTilNavOgLegeFormFields.beskjedTilFastlege
      }
    />
  );
};
