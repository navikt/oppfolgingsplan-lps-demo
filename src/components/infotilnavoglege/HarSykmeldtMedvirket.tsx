import { Controller, useFormContext } from "react-hook-form";
import { Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export const HarSykmeldtMedvirket = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    control,
    formState: { errors },
    watch,
  } = useFormContext<InfoTilNavOgLegeFormFields>();

  const sykmeldtHarMedvirketValue = watch("sykmeldtHarMedvirket");

  const sykmeldtHarIkkeMedvirket = () => {
    if (
      sykmeldtHarMedvirketValue === null ||
      sykmeldtHarMedvirketValue === undefined
    ) {
      return (
        globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket ===
        false
      );
    }
    return sykmeldtHarMedvirketValue === false;
  };

  return (
    <>
      <Controller
        name="sykmeldtHarMedvirket"
        defaultValue={
          globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket
        }
        rules={{
          validate: (value: boolean | null) => {
            if (value == null) {
              return "Du må oppgi om arbeidstaker har medvirket eller ikke.";
            }
            return true;
          },
        }}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RadioGroup
            id="employeeHasContributedToPlan"
            legend={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
            onBlur={onBlur}
            onChange={onChange}
            error={errors.sykmeldtHarMedvirket?.message}
            ref={ref}
            value={value}
          >
            <Radio value={true}>Ja</Radio>
            <Radio value={false}>Nei</Radio>
          </RadioGroup>
        )}
      />

      {sykmeldtHarIkkeMedvirket() && (
        <Textarea
          id="employeeHasNotContributedToPlanDescription"
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          {...register("sykmeldtHarIkkeMedvirketBegrunnelse", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.infoTilNavOgLegeFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
          error={errors.sykmeldtHarIkkeMedvirketBegrunnelse?.message}
        />
      )}
    </>
  );
};
