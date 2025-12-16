"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { ContentPage, Step } from "@/components/ContentPage";
import { Arbeidssituasjon } from "@/components/oppfolgingsplan/arbeidssituasjon";
import { Oppfolging } from "@/components/oppfolgingsplan/oppfolging";
import { Tilrettelegging } from "@/components/oppfolgingsplan/tilrettelegging";
import { useGlobalState } from "@/state/appState";
import { OppfolgingsplanFormFields } from "@/types/FormType";

export default function Home() {
  const router = useRouter();
  const formFunctions = useForm<OppfolgingsplanFormFields>();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const submitDataAndNavigate = (data: OppfolgingsplanFormFields) => {
    console.table(data);

    globalFormStateDispatch({
      ...globalFormState,
      oppfolgingsplanFormFields: { ...data },
    });
    router.push("/infotilnavoglege");
  };

  return (
    <FormProvider {...formFunctions}>
      <form
        onSubmit={formFunctions.handleSubmit(submitDataAndNavigate)}
        className="flex w-full max-w-4xl flex-col"
      >
        <ContentPage
          pageHeader="Oppfølgingsplan for Kari Normann"
          activeStep={Step.oppfolgingsplan}
        >
          <Arbeidssituasjon />

          <Tilrettelegging />

          <Oppfolging />
        </ContentPage>
      </form>
    </FormProvider>
  );
}
