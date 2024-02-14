"use client";
import React from "react";
import { ContentPage, Step } from "@/components/ContentPage";
import { FormProvider, useForm } from "react-hook-form";
import { Alert, BodyLong } from "@navikt/ds-react";
import { FormSummary } from "@/components/summary/FormSummary";
import { useRouter } from "next/navigation";
import { globalStateToFollowUpPlanDTO, useGlobalState } from "@/state/appState";

export default function Page() {
  const router = useRouter();
  const formFunctions = useForm();
  const { globalFormState } = useGlobalState();

  const submitForm = async () => {
    const dto = globalStateToFollowUpPlanDTO(globalFormState);

    const response = await fetch("/oppfolgingsplan-lps/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    if (!response.ok) {
      console.error("Failed to submit form", response);
    } else {
      router.push("/kvittering");
    }
  };

  return (
    <FormProvider {...formFunctions}>
      <form
        onSubmit={formFunctions.handleSubmit(submitForm)}
        className="flex max-w-4xl flex-col w-full"
      >
        <ContentPage
          pageHeader="Send inn oppfølgingsplanen"
          activeStep={Step.innsending}
        >
          <BodyLong size="large" textColor="subtle">
            Se over at alt stemmer, og send inn planen når du er klar.
          </BodyLong>
          <Alert variant="info" className="mb-4">
            Dette er kun en test, planen blir ikke sendt inn på ekte!
          </Alert>
          <FormSummary />
        </ContentPage>
      </form>
    </FormProvider>
  );
}
