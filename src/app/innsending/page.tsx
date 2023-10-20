"use client";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { Controller, useForm } from "react-hook-form";
import { useGlobalState } from "@/state/appState";
import { MedvirkningFormFields } from "@/types/FormType";
import { ConfirmationPanel } from "@navikt/ds-react";

export default function Page() {
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MedvirkningFormFields>();

  const submitForm = (data: MedvirkningFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      medvirkningFormFields: { ...data },
    });
    console.log(globalFormState);
  };

  return (
    <FormPage
      pageHeader="Oppsummering og innsending todo"
      activeStep={Step.innsending}
      onSubmit={handleSubmit(submitForm)}
    >
      <div>Oppsummering av svarene dine her.. TODO</div>

      <Controller
        name="sykmeldtHarMedvirket"
        defaultValue={
          globalFormState.medvirkningFormFields.sykmeldtHarMedvirket
        }
        rules={{ required: "Du må bekrefte medvirkning" }}
        control={control}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <ConfirmationPanel
            label="Ja, den sykmeldte har medvirket til oppfølgingsplanen."
            onBlur={onBlur}
            onChange={onChange}
            error={errors.sykmeldtHarMedvirket?.message}
            ref={ref}
            value={value}
          >
            For å kunne sende inn må du bekrefte at den sykmeldte har medvirket
            til oppfølgingsplanen
          </ConfirmationPanel>
        )}
      />
    </FormPage>
  );
}
