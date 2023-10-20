"use client";
import { Textarea } from "@navikt/ds-react";
import React from "react";
import { FormPage, Step } from "@/components/FormPage";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { useForm } from "react-hook-form";
import { TilretteleggingFormFields } from "@/types/FormType";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TilretteleggingFormFields>();

  const storeGlobalData = (data: TilretteleggingFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      tilretteleggingFormFields: { ...data },
    });
    router.push("/bedriftsinformasjon");
  };

  return (
    <FormPage
      pageHeader="Tilrettelegging på arbeidsplassen"
      activeStep={Step.tilrettelegging}
      onSubmit={handleSubmit(storeGlobalData)}
    >
      <Textarea
        label="Har det blitt forsøkt tilrettelegging på et tidligere tidspunkt?"
        {...register("tidligereTilrettelegging")}
        defaultValue={
          globalFormState.tilretteleggingFormFields.tidligereTilrettelegging
        }
      />
      <Textarea
        label="Hvilken tilrettelegging blir gjort per i dag?"
        {...register("tilretteleggingIDag", { required: "Feltet er påkrevd" })}
        defaultValue={
          globalFormState.tilretteleggingFormFields.tilretteleggingIDag
        }
        error={errors.tilretteleggingIDag?.message}
      />
      <Textarea
        label="Har dere fremtidige planer for tilrettelegging som ikke blir gjort i dag?"
        {...register("fremtidigTilrettelegging")}
        defaultValue={
          globalFormState.tilretteleggingFormFields.fremtidigTilrettelegging
        }
      />
    </FormPage>
  );
}
