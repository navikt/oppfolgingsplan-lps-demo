import { Heading, Textarea } from "@navikt/ds-react";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FieldErrors } from "react-hook-form/dist/types/errors";

interface Props {
  register: UseFormRegister<OppfolgingsplanFormFields>;
  errors: FieldErrors<OppfolgingsplanFormFields>;
}

export const Arbeidssituasjon = ({ register, errors }: Props) => {
  const { globalFormState } = useGlobalState();

  return (
    <>
      <Heading size="medium" level={"2"} className="mt-4">
        Arbeidssituasjon
      </Heading>

      <Textarea
        label={fieldTexts.oppfolgingsplanTexts.typiskArbeidshverdag}
        {...register("typiskArbeidshverdag", { required: "Feltet er påkrevd" })}
        defaultValue={
          globalFormState.oppfolgingsplanFormFields.typiskArbeidshverdag
        }
        error={errors.typiskArbeidshverdag?.message}
      />
      <Textarea
        label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomKanUtfores}
        {...register("arbeidsoppgaverSomKanUtfores", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.oppfolgingsplanFormFields.arbeidsoppgaverSomKanUtfores
        }
        error={errors.arbeidsoppgaverSomKanUtfores?.message}
      />
      <Textarea
        label={fieldTexts.oppfolgingsplanTexts.arbeidsoppgaverSomIkkeKanUtfores}
        defaultValue={
          globalFormState.oppfolgingsplanFormFields
            .arbeidsoppgaverSomIkkeKanUtfores
        }
        {...register("arbeidsoppgaverSomIkkeKanUtfores", {
          required: "Feltet er påkrevd",
        })}
        error={errors.arbeidsoppgaverSomIkkeKanUtfores?.message}
      />
    </>
  );
};
