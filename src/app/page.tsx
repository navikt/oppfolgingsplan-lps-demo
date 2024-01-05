"use client";

import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { useForm } from "react-hook-form";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { useGlobalState } from "@/state/appState";
import { useRouter } from "next/navigation";
import { OppfolgingsplanPeriod } from "@/components/oppfolgingsplanPeriod/OppfolgingsplanPeriod";
import { Arbeidssituasjon } from "@/components/oppfolgingsplan/arbeidssituasjon";
import { Tilrettelegging } from "@/components/oppfolgingsplan/tilrettelegging";
import {Heading, Textarea} from "@navikt/ds-react";

export default function Home() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<OppfolgingsplanFormFields>();

  const storeGlobalData = (data: OppfolgingsplanFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      oppfolgingsplanFormFields: { ...data },
    });
    router.push("/infotilnavoglege");
  };

  return (
    <FormPage
      pageHeader="Oppfølgingsplan for Kari Normann"
      activeStep={Step.oppfolgingsplan}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <OppfolgingsplanPeriod />

      <Arbeidssituasjon register={register} errors={errors} />

      <Tilrettelegging
        register={register}
        errors={errors}
        watch={watch}
        control={control}
      />

      <Heading size="medium" level={"2"} className="mt-4">
        Oppfølging
      </Heading>
      <Textarea
          label="Hvordan skal dere følge opp at avtalt tilrettelegging fungerer?"
          description="Beskriv når og hvordan dere skal vurdere om det er behov for å gjøre endringer i planen"
          {...register("oppfolging", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.oppfolgingsplanFormFields.oppfolging
          }
          error={errors.oppfolging?.message}
      />
    </FormPage>
  );
}
