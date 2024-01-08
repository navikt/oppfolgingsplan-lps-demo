import { optionalText } from "@/text/textUtils";
import { fieldTexts } from "@/text/fieldTexts";
import { Textarea } from "@navikt/ds-react";
import React from "react";
import { useGlobalState } from "@/state/appState";
import { useFormContext } from "react-hook-form";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const EventuelleTilleggsopplysninger = () => {
  const { globalFormState } = useGlobalState();

  const {
    register,
    formState: { errors },
  } = useFormContext<InfoTilNavOgLegeFormFields>();

  return (
    <Textarea
      label={optionalText(fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger)}
      description="Dersom det er behov for å gi mer opplysninger"
      {...register("utfyllendeOpplysninger")}
      defaultValue={
        globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger
      }
    />
  );
};
