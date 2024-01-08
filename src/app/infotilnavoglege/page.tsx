"use client";
import { ContentPage, Step } from "@/components/ContentPage";
import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { FormProvider, useForm } from "react-hook-form";
import { InfoTilNavOgLegeFormFields } from "@/types/FormType";
import { HarSykmeldtMedvirket } from "@/components/infotilnavoglege/HarSykmeldtMedvirket";
import { Mottaker } from "@/components/infotilnavoglege/Mottaker";
import { BeskjedTilLege } from "@/components/infotilnavoglege/BeskjedTilLege";
import { TrengerHjelpFraNav } from "@/components/infotilnavoglege/TrengerHjelpFraNav";
import { Kontaktperson } from "@/components/infotilnavoglege/Kontaktperson";
import { EventuelleTilleggsopplysninger } from "@/components/infotilnavoglege/EventuelleTilleggsopplysninger";

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
        className="flex max-w-4xl flex-col w-full"
      >
        <ContentPage
          pageHeader="Informasjon til NAV og fastlege"
          activeStep={Step.infoTilNavOgLege}
        >
          <Mottaker />

          <BeskjedTilLege />

          <TrengerHjelpFraNav />

          <Kontaktperson />

          <EventuelleTilleggsopplysninger />

          <HarSykmeldtMedvirket />
        </ContentPage>
      </form>
    </FormProvider>
  );
}
