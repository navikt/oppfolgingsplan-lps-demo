"use client";
import { Checkbox, CheckboxGroup, Textarea } from "@navikt/ds-react";
import { FormPage, Step } from "@/components/FormPage";
import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { Controller, useForm } from "react-hook-form";
import { KommunikasjonFormFields } from "@/types/FormType";
import { fieldTexts } from "@/text/fieldTexts";
import {optionalText} from "@/text/textUtils";

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
      pageHeader="Kommunikasjon med NAV og fastlege"
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
            legend={fieldTexts.kommunikasjonTexts.mottaker}
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
        label={optionalText(fieldTexts.kommunikasjonTexts.bistandFraNav)}
        description="For eksempel om dere ønsker et dialogmøte i regi av NAV, eller har behov for hjelpemidler"
        {...register("bistandFraNav")}
        defaultValue={globalFormState.kommunikasjonFormFields.bistandFraNav}
      />
      <Textarea
        label={optionalText(fieldTexts.kommunikasjonTexts.avklaringSykmelder)}
        {...register("avklaringSykmelder")}
        defaultValue={
          globalFormState.kommunikasjonFormFields.avklaringSykmelder
        }
      />

      <Textarea
        label={optionalText(fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger)}
        description="Dersom det er behov for å gi mer opplysninger"
        {...register("utfyllendeOpplysninger")}
        defaultValue={
          globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
        }
      />
    </FormPage>
  );
}
