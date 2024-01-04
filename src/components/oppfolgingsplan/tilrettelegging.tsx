import { Heading, Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import { Controller } from "react-hook-form";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import React from "react";
import {
  Control,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form/dist/types/form";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { useGlobalState } from "@/state/appState";

interface Props {
  register: UseFormRegister<OppfolgingsplanFormFields>;
  errors: FieldErrors<OppfolgingsplanFormFields>;
  control: Control<OppfolgingsplanFormFields>;
  watch: UseFormWatch<OppfolgingsplanFormFields>;
}

export const Tilrettelegging = ({
  register,
  errors,
  control,
  watch,
}: Props) => {
  const { globalFormState } = useGlobalState();

  const tidligereTilretteleggingJaNeiValue = watch("tidligereTilrettelegging");

  const hasSelectedTidligereTilrettelegging = () => {
    if (
      tidligereTilretteleggingJaNeiValue === null ||
      tidligereTilretteleggingJaNeiValue === undefined
    ) {
      return (
        globalFormState.oppfolgingsplanFormFields.tidligereTilrettelegging ===
        true
      );
    }
    return tidligereTilretteleggingJaNeiValue === true;
  };

  return (
    <>
      <Heading size="medium" level={"2"} className="mt-4">
        Tilrettelegging
      </Heading>

      <Controller
        name="tidligereTilrettelegging"
        defaultValue={
          globalFormState.oppfolgingsplanFormFields.tidligereTilrettelegging
        }
        rules={{
          validate: (value: boolean | null) => {
            if (value == null) {
              return "Du må oppgi om dere har gjort tilrettelegging før denne perioden.";
            }
            return true;
          },
        }}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <RadioGroup
            legend={
              fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingJaNei
            }
            onBlur={onBlur}
            onChange={onChange}
            error={errors.tidligereTilrettelegging?.message}
            ref={ref}
            value={value}
          >
            <Radio value={true}>Ja</Radio>
            <Radio value={false}>Nei</Radio>
          </RadioGroup>
        )}
      />

      {hasSelectedTidligereTilrettelegging() && (
        <Textarea
          label={
            fieldTexts.oppfolgingsplanTexts.tidligereTilretteleggingBeskrivelse
          }
          {...register("tidligereTilretteleggingBeskrivelse", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields
              .tidligereTilretteleggingBeskrivelse
          }
          error={errors.tidligereTilretteleggingBeskrivelse?.message}
        />
      )}
      <Textarea
        label={fieldTexts.oppfolgingsplanTexts.tilretteleggingIDennePerioden}
        description="Hva skal til for at den sykmeldte kan være på jobb til tross for sine plager?"
        {...register("tilretteleggingIDennePerioden", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.oppfolgingsplanFormFields
            .tilretteleggingIDennePerioden
        }
        error={errors.tilretteleggingIDennePerioden?.message}
      />
      <Textarea
        label={optionalText(
          fieldTexts.oppfolgingsplanTexts.muligheterForTilrettelegging,
        )}
        {...register("muligheterForTilrettelegging")}
        defaultValue={
          globalFormState.oppfolgingsplanFormFields.muligheterForTilrettelegging
        }
      />
    </>
  );
};
