import { useFormContext, useWatch } from "react-hook-form";
import { ControlledBooleanRadioGroup } from "@/components/form/ControlledBooleanRadioGroup";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const TrengerHjelpFraNav = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const mottakerValue = useWatch({ control, name: "mottaker" });
  const trengerHjelpFraNavValue = useWatch({
    control,
    name: "trengerHjelpFraNav",
  });

  const hasSelectedSendTilNAV =
    (mottakerValue &&
      Array.isArray(mottakerValue) &&
      mottakerValue.includes("NAV")) ||
    (!mottakerValue &&
      globalFormState.infoTilNavOgLegeFormFields.mottaker?.includes("NAV"));

  const hasSelectedTrengerHjelpFraNAV =
    trengerHjelpFraNavValue === true ||
    (trengerHjelpFraNavValue === undefined &&
      globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav === true);

  if (!hasSelectedSendTilNAV) {
    return null;
  }

  return (
    <>
      <ControlledBooleanRadioGroup
        name="trengerHjelpFraNav"
        legend={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
        description="For eksempel om dere ønsker et dialogmøte i regi av NAV, eller har behov for hjelpemidler"
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav
        }
        rules={{
          validate: (value) =>
            value != null ||
            "Du må oppgi om dere trenger hjelp fra NAV eller ikke",
        }}
      />

      {hasSelectedTrengerHjelpFraNAV && (
        <ControlledTextarea
          name="trengerHjelpFraNavBeskrivelse"
          label={
            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
          }
          defaultValue={
            globalFormState.infoTilNavOgLegeFormFields
              .trengerHjelpFraNavBeskrivelse
          }
          rules={{
            validate: (value) =>
              !hasSelectedTrengerHjelpFraNAV || !!value || "Feltet er påkrevd",
          }}
        />
      )}
    </>
  );
};
