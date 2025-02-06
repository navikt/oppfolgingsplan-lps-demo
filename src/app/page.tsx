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
import {Mottaker} from "@/components/infotilnavoglege/Mottaker";
import {BeskjedTilLege} from "@/components/infotilnavoglege/BeskjedTilLege";
import {TrengerHjelpFraNav} from "@/components/infotilnavoglege/TrengerHjelpFraNav";
import {EventuelleTilleggsopplysninger} from "@/components/infotilnavoglege/EventuelleTilleggsopplysninger";
import {HarSykmeldtMedvirket} from "@/components/infotilnavoglege/HarSykmeldtMedvirket";

export default function Home() {
  const router = useRouter();
  const formFunctions = useForm<OppfolgingsplanFormFields>();
  const navigateToReceipt = () => {
    router.push("/kvittering");
  };

  return (
    <FormProvider {...formFunctions}>
      <form
        onSubmit={navigateToReceipt}
        className="flex max-w-4xl flex-col w-full"
      >
        <ContentPage
          pageHeader="Oppfølgingsplan for Kari Normann"
          activeStep={Step.oppfolgingsplan}
        >
          <Arbeidssituasjon />

          <Tilrettelegging />

          <Oppfolging />

          {/*<Mottaker />*/}

          {/*<BeskjedTilLege />*/}

          {/*<TrengerHjelpFraNav />*/}

          {/*<EventuelleTilleggsopplysninger />*/}

          {/*<Kontaktperson />*/}

          <HarSykmeldtMedvirket />
        </ContentPage>
      </form>
    </FormProvider>
  );
}
