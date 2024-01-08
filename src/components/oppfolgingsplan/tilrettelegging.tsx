import {
  BodyLong,
  Heading,
  Radio,
  RadioGroup,
  Textarea,
} from "@navikt/ds-react";
import { Controller, useFormContext } from "react-hook-form";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { Section } from "@/components/wrappers/Section";
import { OpDatePicker } from "@/components/datepicker/OpDatePicker";

export const Tilrettelegging = () => {
  const { globalFormState } = useGlobalState();
  const {
    register,
    formState: { errors },
    control,
    watch,
  } = useFormContext<OppfolgingsplanFormFields>();

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
    <div>
      <Heading size="medium" level={"2"} spacing>
        Tilrettelegging
      </Heading>

      <Section>
        <div>
          <BodyLong weight="semibold">Tilretteleggingsperiode</BodyLong>
          <BodyLong textColor="subtle">
            Oppgi hvilken periode planen skal gjelde for
          </BodyLong>
          <div className="flex flex-row gap-8">
            <OpDatePicker name="periodeFra" label="Fra dato" />
            <OpDatePicker name="periodeTil" label="Til dato" />
          </div>
        </div>

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
              fieldTexts.oppfolgingsplanTexts
                .tidligereTilretteleggingBeskrivelse
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
          description="Beskriv hva som skal til for at den sykmeldte kan utføre deler av jobben til tross for sine plager"
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
            globalFormState.oppfolgingsplanFormFields
              .muligheterForTilrettelegging
          }
        />
      </Section>
    </div>
  );
};
