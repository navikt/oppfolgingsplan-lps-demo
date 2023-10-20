"use client";
import { Checkbox, CheckboxGroup, Textarea } from "@navikt/ds-react";
import { FormPage, Step } from "@/components/FormPage";
import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { Controller, useForm } from "react-hook-form";
import { KommunikasjonFormFields } from "@/types/FormType";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<KommunikasjonFormFields>();

  const storeGlobalData = (data: KommunikasjonFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      kommunikasjonFormFields: { ...data },
    });
    router.push("/innsending");
  };

  return (
    <FormPage
      pageHeader="Kommunikasjon med NAV og sykmelder"
      activeStep={Step.kommunikasjon}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <Controller
        name="mottaker"
        defaultValue={globalFormState.kommunikasjonFormFields.mottaker || []}
        rules={{ required: "Du må velge hvem planen skal deles med" }}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <CheckboxGroup
            legend="Hvem vil du dele planen med?"
            onBlur={onBlur}
            onChange={onChange}
            error={errors.mottaker?.message}
            ref={ref}
            value={value}
          >
            <Checkbox value="NAV">NAV</Checkbox>
            <Checkbox value="LEGE">Lege</Checkbox>
          </CheckboxGroup>
        )}
      />

      <Textarea
        label="Har dere behov for bistand fra NAV?"
        description="For eksempel.."
        {...register("bistandFraNav")}
        defaultValue={globalFormState.kommunikasjonFormFields.bistandFraNav}
      />
      <Textarea
        label="Har dere behov for avklaringer fra sykmelder?"
        {...register("avklaringSykmelder")}
        defaultValue={
          globalFormState.kommunikasjonFormFields.avklaringSykmelder
        }
      />

      <Textarea
        label="Utfyllende opplysninger"
        description="Dersom det er behov for å gi mer opplysninger"
        {...register("utfyllendeOpplysninger")}
        defaultValue={
          globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
        }
      />
    </FormPage>
  );
}
