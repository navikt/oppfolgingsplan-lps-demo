"use client";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { Controller, useForm } from "react-hook-form";
import { useGlobalState } from "@/state/appState";
import { MedvirkningFormFields } from "@/types/FormType";
import {Alert, BodyLong, ConfirmationPanel} from "@navikt/ds-react";
import { FormSummary } from "@/components/summary/FormSummary";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MedvirkningFormFields>();

  const submitForm = (data: MedvirkningFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      medvirkningFormFields: { ...data },
    });
    router.push("/kvittering");
  };

  return (
    <FormPage
      pageHeader="Send inn oppfølgingsplanen"
      activeStep={Step.innsending}
      onSubmit={handleSubmit(submitForm)}
    >
      <BodyLong size="large" textColor="subtle">
        Se over at alt stemmer, og send inn planen når du er klar.
      </BodyLong>
      <Alert variant="info">Dette er kun en test, planen blir ikke sendt inn på ekte!</Alert>
      <FormSummary />

      <Controller
        name="sykmeldtHarMedvirket"
        defaultValue={
          globalFormState.medvirkningFormFields.sykmeldtHarMedvirket
        }
        rules={{ required: "Du må bekrefte medvirkning" }}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <ConfirmationPanel
            label="Ja, arbeidstaker har medvirket til oppfølgingsplanen."
            onBlur={onBlur}
            onChange={onChange}
            error={errors.sykmeldtHarMedvirket?.message}
            ref={ref}
            value={value}
          >
            For å kunne sende inn må du bekrefte at arbeidstaker har medvirket
            til oppfølgingsplanen
          </ConfirmationPanel>
        )}
      />
    </FormPage>
  );
}
