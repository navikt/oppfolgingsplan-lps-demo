"use client";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { useForm } from "react-hook-form";
import { Alert, BodyLong } from "@navikt/ds-react";
import { FormSummary } from "@/components/summary/FormSummary";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const { handleSubmit } = useForm();

  const submitForm = () => {
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
      <Alert variant="info" className="mb-4">
        Dette er kun en test, planen blir ikke sendt inn på ekte!
      </Alert>
      <FormSummary />
    </FormPage>
  );
}
