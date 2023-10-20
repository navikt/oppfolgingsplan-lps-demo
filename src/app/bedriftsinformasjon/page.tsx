"use client";
import { TextField } from "@navikt/ds-react";
import { FormPage, Step } from "@/components/FormPage";
import React from "react";
import { useForm } from "react-hook-form";
import { VirksomhetFormFields } from "@/types/FormType";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VirksomhetFormFields>();

  const storeGlobalData = (data: VirksomhetFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      virksomhetFormFields: { ...data },
    });
    router.push("/kommunikasjon");
  };

  return (
    <FormPage
      pageHeader="Informasjon om bedriften"
      activeStep={Step.bedriftsinfo}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <TextField
        label="Bedriftens navn"
        {...register("virksomhetsnavn", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.virksomhetFormFields.virksomhetsnavn}
        error={errors.virksomhetsnavn?.message}
      />
      <TextField
        label="Bedriftens virksomhetsnummer"
        {...register("virksomhetsnummer", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.virksomhetFormFields.virksomhetsnummer}
        error={errors.virksomhetsnummer?.message}
      />
      <TextField
        label="Nærmeste leders fornavn"
        {...register("narmestelederfornavn", { required: "Feltet er påkrevd" })}
        defaultValue={globalFormState.virksomhetFormFields.narmestelederfornavn}
        error={errors.narmestelederfornavn?.message}
      />
      <TextField
        label="Nærmeste leders etternavn"
        {...register("narmestelederetternavn", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.virksomhetFormFields.narmestelederetternavn
        }
        error={errors.narmestelederetternavn?.message}
      />
      <TextField
        label="Nærmeste leders telefonnummer"
        {...register("narmesteledertelefonnummer", {
          required: "Feltet er påkrevd",
        })}
        defaultValue={
          globalFormState.virksomhetFormFields.narmesteledertelefonnummer
        }
        error={errors.narmesteledertelefonnummer?.message}
      />
    </FormPage>
  );
}
