import { Textarea } from "@navikt/ds-react";
import { optionalText } from "@/text/textUtils";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";
import { useFormContext } from "react-hook-form";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const BeskjedTilLege = () => {
  const { globalFormState } = useGlobalState();

  const { register, watch } = useFormContext<InfoTilNavOgLegeFormFields>();

  const mottakerValue = watch("mottaker");

  const hasSelectedSendTilLege = () => {
    if (mottakerValue === null || mottakerValue === undefined) {
      return globalFormState.infoTilNavOgLegeFormFields.mottaker?.includes(
        "LEGE",
      );
    }
    return mottakerValue?.includes("LEGE");
  };

  if (hasSelectedSendTilLege()) {
    return (
      <Textarea
        id="messageToGeneralPractitioner"
        label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
        {...register("beskjedTilFastlege")}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.beskjedTilFastlege
        }
      />
    );
  }
  return null;
};
