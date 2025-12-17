import { useFormContext, useWatch } from "react-hook-form";
import { ControlledBooleanRadioGroup } from "@/components/form/ControlledBooleanRadioGroup";
import { ControlledTextarea } from "@/components/form/ControlledTextarea";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const HarSykmeldtMedvirket = () => {
  const { globalFormState } = useGlobalState();
  const { control } = useFormContext<InfoTilNavOgLegeFormFields>();

  const sykmeldtHarMedvirketValue = useWatch({
    control,
    name: "sykmeldtHarMedvirket",
  });

  const sykmeldtHarIkkeMedvirket =
    sykmeldtHarMedvirketValue === false ||
    (sykmeldtHarMedvirketValue === undefined &&
      globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket ===
        false);

  return (
    <>
      <ControlledBooleanRadioGroup
        name="sykmeldtHarMedvirket"
        legend={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket
        }
        rules={{
          validate: (value) =>
            value != null ||
            "Du må oppgi om arbeidstaker har medvirket eller ikke.",
        }}
      />

      {sykmeldtHarIkkeMedvirket && (
        <ControlledTextarea
          name="sykmeldtHarIkkeMedvirketBegrunnelse"
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          defaultValue={
            globalFormState.infoTilNavOgLegeFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
          rules={{
            validate: (value) =>
              !sykmeldtHarIkkeMedvirket || !!value || "Feltet er påkrevd",
          }}
        />
      )}
    </>
  );
};
