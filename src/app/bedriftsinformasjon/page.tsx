"use client";
import {BodyLong, TextField} from "@navikt/ds-react";
import { FormPage, Step } from "@/components/FormPage";
import React from "react";
import { useForm } from "react-hook-form";
import { OppfolgingsansvarligFormFields } from "@/types/FormType";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { fieldTexts } from "@/text/fieldTexts";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OppfolgingsansvarligFormFields>();

  const storeGlobalData = (data: OppfolgingsansvarligFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      oppfolgingsansvarligFormFields: { ...data },
    });
    router.push("/kommunikasjon");
  };

  return (
    <FormPage
      pageHeader="Kontaktperson"
      activeStep={Step.bedriftsinfo}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <BodyLong size="large" textColor="subtle">
        Den som har ansvaret for å følge opp den sykmeldte, som for eksempel nærmeste leder eller kontaktperson hos HR
      </BodyLong>

      <TextField
        label={fieldTexts.oppfolgingsansvarligTexts.fornavn}
        {...register("fornavn", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.oppfolgingsansvarligFormFields.fornavn}
        error={errors.fornavn?.message}
      />
      <TextField
        label={fieldTexts.oppfolgingsansvarligTexts.etternavn}
        {...register("etternavn", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.oppfolgingsansvarligFormFields.etternavn
        }
        error={errors.etternavn?.message}
      />
      <TextField
        label={fieldTexts.oppfolgingsansvarligTexts.telefonnummer}
        {...register("telefonnummer", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.oppfolgingsansvarligFormFields.telefonnummer
        }
        error={errors.telefonnummer?.message}
      />
    </FormPage>
  );
}
