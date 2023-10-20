"use client";

import { BodyLong, Heading, Textarea, TextField } from "@navikt/ds-react";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { useForm } from "react-hook-form";
import { ArbeidsoppgaveFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { useRouter } from "next/navigation";
import { fieldTexts } from "@/text/fieldTexts";

export default function Home() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArbeidsoppgaveFormFields>();

  const storeGlobalData = (data: ArbeidsoppgaveFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      arbeidsoppgaveFields: { ...data },
    });
    router.push("/tilrettelegging");
  };

  return (
    <FormPage
      pageHeader="Oppfølgingsplan for Kari Normann"
      activeStep={Step.arbeidsoppgaver}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <BodyLong textColor="subtle">Fødselsnummer: 123456789</BodyLong>
      <Heading size="medium" level={"2"}>
        Arbeidssituasjon
      </Heading>
      <TextField
        label={fieldTexts.arbeidsoppgaveTexts.stilling}
        {...register("stilling", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.arbeidsoppgaveFields.stilling}
        error={errors.stilling?.message}
      />
      <Textarea
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaver}
        {...register("arbeidsoppgaver", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.arbeidsoppgaveFields.arbeidsoppgaver}
        error={errors.arbeidsoppgaver?.message}
      />
      <Textarea
        label={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverikkeutfores}
        defaultValue={
          globalFormState.arbeidsoppgaveFields.arbeidsoppgaverikkeutfores
        }
        {...register("arbeidsoppgaverikkeutfores")}
      />
    </FormPage>
  );
}
