import {
  Controller,
  useController,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Radio, RadioGroup, Textarea } from "@navikt/ds-react";
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

  const sykmeldtHarIkkeMedvirketBegrunnelse = useController({
    name: "sykmeldtHarIkkeMedvirketBegrunnelse",
    control,
    defaultValue:
      globalFormState.infoTilNavOgLegeFormFields
        .sykmeldtHarIkkeMedvirketBegrunnelse,
    rules: {
      validate: (value) => {
        if (sykmeldtHarIkkeMedvirket() && !value) {
          return "Feltet er påkrevd";
        }
        return true;
      },
    },
  });

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
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <RadioGroup
            id="employeeHasContributedToPlan"
            legend={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
            onBlur={onBlur}
            onChange={(val) => onChange(val === "true")}
            error={fieldState.error?.message}
            ref={ref}
            value={value === null || value === undefined ? "" : String(value)}
          >
            <Radio value="true">Ja</Radio>
            <Radio value="false">Nei</Radio>
          </RadioGroup>
        )}
      />

      {sykmeldtHarIkkeMedvirket() && (
        <Textarea
          id="employeeHasNotContributedToPlanDescription"
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          {...sykmeldtHarIkkeMedvirketBegrunnelse.field}
          value={sykmeldtHarIkkeMedvirketBegrunnelse.field.value ?? ""}
          error={sykmeldtHarIkkeMedvirketBegrunnelse.fieldState.error?.message}
        />
      )}
    </>
  );
};
