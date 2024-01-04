"use client";

import { Heading, Radio, RadioGroup, Textarea } from "@navikt/ds-react";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { Controller, useForm } from "react-hook-form";
import { JobbOgMuligheterFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { useRouter } from "next/navigation";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";
import { OppfolgingsplanPeriod } from "@/components/oppfolgingsplanPeriod/OppfolgingsplanPeriod";

export default function Home() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<JobbOgMuligheterFormFields>();

  const storeGlobalData = (data: JobbOgMuligheterFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      jobbOgMuligheterFormFields: { ...data },
    });
    router.push("/infotilnavoglege");
  };

  const tidligereTilretteleggingJaNeiValue = watch("tidligereTilrettelegging");

  const hasSelectedTidligereTilrettelegging = () => {
    if (tidligereTilretteleggingJaNeiValue === null) {
      return (
        globalFormState.jobbOgMuligheterFormFields.tidligereTilrettelegging ===
        true
      );
    }
    return tidligereTilretteleggingJaNeiValue === true;
  };

  return (
    <FormPage
      pageHeader="Oppfølgingsplan for Kari Normann"
      activeStep={Step.oppfolgingsplan}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <OppfolgingsplanPeriod />

      <Heading size="medium" level={"2"} className="mt-4">
        Arbeidssituasjon
      </Heading>

      <Textarea
        label={fieldTexts.arbeidsoppgaveTexts.typiskArbeidshverdag}
        {...register("typiskArbeidshverdag", { required: "Feltet er påkrevd" })}
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields.typiskArbeidshverdag
        }
        error={errors.typiskArbeidshverdag?.message}
      />
      <Textarea
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomKanUtfores}
        description="Hva ville vært bra for den sykmeldte på jobben slik hen har det nå?"
        {...register("arbeidsoppgaverSomKanUtfores", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields
            .arbeidsoppgaverSomKanUtfores
        }
        error={errors.arbeidsoppgaverSomKanUtfores?.message}
      />
      <Textarea
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomIkkeKanUtfores}
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields
            .arbeidsoppgaverSomIkkeKanUtfores
        }
        {...register("arbeidsoppgaverSomIkkeKanUtfores", {
          required: "Feltet er påkrevd",
        })}
        error={errors.arbeidsoppgaverSomIkkeKanUtfores?.message}
      />

      <Heading size="medium" level={"2"} className="mt-4">
        Tilrettelegging
      </Heading>

      <Controller
        name="tidligereTilrettelegging"
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields.tidligereTilrettelegging
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
              fieldTexts.tilretteleggingTexts.tidligereTilretteleggingJaNei
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
            fieldTexts.tilretteleggingTexts.tidligereTilretteleggingBeskrivelse
          }
          {...register("tidligereTilretteleggingBeskrivelse", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.jobbOgMuligheterFormFields
              .tidligereTilretteleggingBeskrivelse
          }
          error={errors.tidligereTilretteleggingBeskrivelse?.message}
        />
      )}
      <Textarea
        label={fieldTexts.tilretteleggingTexts.tilretteleggingIDennePerioden}
        description="Hva skal til for at den sykmeldte kan være på jobb til tross for sine plager?"
        {...register("tilretteleggingIDennePerioden", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields
            .tilretteleggingIDennePerioden
        }
        error={errors.tilretteleggingIDennePerioden?.message}
      />
      <Textarea
        label={optionalText(
          fieldTexts.tilretteleggingTexts.muligheterForTilrettelegging,
        )}
        {...register("muligheterForTilrettelegging")}
        defaultValue={
          globalFormState.jobbOgMuligheterFormFields
            .muligheterForTilrettelegging
        }
      />
    </FormPage>
  );
}
