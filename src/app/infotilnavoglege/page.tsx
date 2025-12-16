"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { ContentPage, Step } from "@/components/ContentPage";
import { BeskjedTilLege } from "@/components/infotilnavoglege/BeskjedTilLege";
import { EventuelleTilleggsopplysninger } from "@/components/infotilnavoglege/EventuelleTilleggsopplysninger";
import { HarSykmeldtMedvirket } from "@/components/infotilnavoglege/HarSykmeldtMedvirket";
import { Kontaktperson } from "@/components/infotilnavoglege/Kontaktperson";
import { Mottaker } from "@/components/infotilnavoglege/Mottaker";
import { TrengerHjelpFraNav } from "@/components/infotilnavoglege/TrengerHjelpFraNav";
import { useGlobalState } from "@/state/appState";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";

export default function Page() {
  const router = useRouter();
  const formFunctions = useForm<InfoTilNavOgLegeFormFields>();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();

  const submitDataAndNavigate = (data: InfoTilNavOgLegeFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      infoTilNavOgLegeFormFields: { ...data },
    });
    router.push("/innsending");
  };

  return (
    <FormProvider {...formFunctions}>
      <form
        onSubmit={formFunctions.handleSubmit(submitDataAndNavigate)}
        className="flex w-full max-w-4xl flex-col"
      >
        <ContentPage
          pageHeader="Informasjon til NAV og fastlege"
          activeStep={Step.infoTilNavOgLege}
        >
          <Mottaker />

          <BeskjedTilLege />

          <TrengerHjelpFraNav />

          <EventuelleTilleggsopplysninger />

          <Kontaktperson />

          <HarSykmeldtMedvirket />
        </ContentPage>
      </form>
    </FormProvider>
  );
}
