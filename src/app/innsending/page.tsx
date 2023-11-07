"use client";
import React from "react";
import {FormPage, Step} from "@/components/FormPage";
import {Controller, useForm} from "react-hook-form";
import {useGlobalState} from "@/state/appState";
import {MedvirkningFormFields} from "@/types/FormType";
import {Alert, BodyLong, Heading, Radio, RadioGroup} from "@navikt/ds-react";
import {FormSummary} from "@/components/summary/FormSummary";
import {useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter();
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
    router.push("/kvittering");
  };

  return (
    <FormPage
      pageHeader="Send inn oppfølgingsplanen"
      activeStep={Step.innsending}
      onSubmit={handleSubmit(submitForm)}
    >
      <BodyLong size="large" textColor="subtle">
        Se over at alt stemmer, og send inn planen når du er klar.
      </BodyLong>
      <Alert variant="info" className="mb-4">
        Dette er kun en test, planen blir ikke sendt inn på ekte!
      </Alert>
      <FormSummary />

      <div className="mt-4">
        <Heading size="small">
          Har arbeidstaker medvirket til utforming av oppfølgingsplanen?
        </Heading>
        <Controller
          name="sykmeldtHarMedvirket"
          defaultValue={
            globalFormState.medvirkningFormFields.sykmeldtHarMedvirket
          }
          rules={{
            validate: (value: boolean | null) => {
              if (value == null) {
                return "Du må oppgi om arbeidstaker har medvirket eller ikke.";
              }
              return true;
            },
          }}
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <RadioGroup
              legend="Har arbeidstaker medvirket til utforming av oppfølgingsplanen?"
              hideLegend={true}
              onBlur={onBlur}
              onChange={onChange}
              error={errors.sykmeldtHarMedvirket?.message}
              ref={ref}
              value={value}
            >
              <Radio value={true}>Ja</Radio>
              <Radio value={false}>Nei</Radio>
            </RadioGroup>
          )}
        />
      </div>
    </FormPage>
  );
}
