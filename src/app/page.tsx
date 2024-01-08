"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { useRouter } from "next/navigation";
import { ContentPage, Step } from "@/components/ContentPage";
import { Arbeidssituasjon } from "@/components/oppfolgingsplan/arbeidssituasjon";
import { Tilrettelegging } from "@/components/oppfolgingsplan/tilrettelegging";
import { Oppfolging } from "@/components/oppfolgingsplan/oppfolging";

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
        className="flex max-w-4xl flex-col w-full"
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
