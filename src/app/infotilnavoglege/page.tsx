"use client";
import {
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Textarea,
  TextField,
} from "@navikt/ds-react";
import { FormPage, Step } from "@/components/FormPage";
import React from "react";
import { useRouter } from "next/navigation";
import { useGlobalState } from "@/state/appState";
import { Controller, useForm } from "react-hook-form";
import { KommunikasjonFormFields } from "@/types/FormType";
import { fieldTexts } from "@/text/fieldTexts";
import { optionalText } from "@/text/textUtils";

export default function Page() {
  const router = useRouter();
  const { globalFormState, globalFormStateDispatch } = useGlobalState();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<KommunikasjonFormFields>();

  const storeGlobalData = (data: KommunikasjonFormFields) => {
    globalFormStateDispatch({
      ...globalFormState,
      kommunikasjonFormFields: { ...data },
    });
    router.push("/innsending");
  };

  const mottakerValue = watch("mottaker");
  const trengerHjelpFraNavValue = watch("trengerHjelpFraNav");
  const sykmeldtHarMedvirketValue = watch("sykmeldtHarMedvirket");

  const sykmeldtHarIkkeMedvirket = () => {
    if (sykmeldtHarMedvirketValue === null) {
      return (
        globalFormState.kommunikasjonFormFields.sykmeldtHarMedvirket === false
      );
    }
    return sykmeldtHarMedvirketValue === false;
  };

  const hasSelectedSendTilLege = () => {
    if (!mottakerValue) {
      return globalFormState.kommunikasjonFormFields.mottaker?.includes("LEGE");
    }
    return mottakerValue?.includes("LEGE");
  };

  const hasSelectedSendTilNAV = () => {
    if (!mottakerValue) {
      return globalFormState.kommunikasjonFormFields.mottaker?.includes("NAV");
    }
    return mottakerValue?.includes("NAV");
  };

  const hasSelectedTrengerHjelpFraNAV = () => {
    console.log(trengerHjelpFraNavValue);
    if (trengerHjelpFraNavValue === null) {
      return (
        globalFormState.kommunikasjonFormFields.trengerHjelpFraNav === true
      );
    }
    return trengerHjelpFraNavValue === true;
  };

  return (
    <FormPage
      pageHeader="Informasjon til NAV og fastlege"
      activeStep={Step.infoTilNavOgLege}
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
            <Checkbox value="LEGE">Fastlege</Checkbox>
            <Checkbox value="NAV">NAV</Checkbox>
          </CheckboxGroup>
        )}
      />

      {hasSelectedSendTilLege() && (
        <Textarea
          label={optionalText(fieldTexts.kommunikasjonTexts.beskjedTilFastlege)}
          {...register("beskjedTilFastlege")}
          defaultValue={
            globalFormState.kommunikasjonFormFields.beskjedTilFastlege
          }
        />
      )}

      {hasSelectedSendTilNAV() && (
        <>
          <Controller
            name="trengerHjelpFraNav"
            defaultValue={
              globalFormState.kommunikasjonFormFields.trengerHjelpFraNav
            }
            rules={{
              validate: (value: boolean | null) => {
                if (value == null) {
                  return "Du må oppgi om dere trenger hjelp fra NAV eller ikke";
                }
                return true;
              },
            }}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <RadioGroup
                legend={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
                description="For eksempel om dere ønsker et dialogmøte i regi av NAV, eller har behov for hjelpemidler"
                onBlur={onBlur}
                onChange={onChange}
                error={errors.trengerHjelpFraNav?.message}
                ref={ref}
                value={value}
              >
                <Radio value={true}>Ja</Radio>
                <Radio value={false}>Nei</Radio>
              </RadioGroup>
            )}
          />

          {hasSelectedTrengerHjelpFraNAV() && (
            <Textarea
              label={optionalText(
                fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse,
              )}
              {...register("trengerHjelpFraNavBeskrivelse")}
              defaultValue={
                globalFormState.kommunikasjonFormFields
                  .trengerHjelpFraNavBeskrivelse
              }
            />
          )}
        </>
      )}

      <Controller
        name="sykmeldtHarMedvirket"
        defaultValue={
          globalFormState.kommunikasjonFormFields.sykmeldtHarMedvirket
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
            legend={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
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

      {sykmeldtHarIkkeMedvirket() && (
        <Textarea
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          {...register("sykmeldtHarIkkeMedvirketBegrunnelse", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.kommunikasjonFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
          error={errors.sykmeldtHarIkkeMedvirketBegrunnelse?.message}
        />
      )}

      <TextField
          label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
          description="Den som har ansvaret for å følge opp den sykmeldte, som for eksempel nærmeste leder eller kontaktperson hos HR"
          {...register("kontaktpersonNavn", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={globalFormState.kommunikasjonFormFields.kontaktpersonNavn}
          error={errors.kontaktpersonNavn?.message}
      />

      <TextField
          label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
          {...register("kontaktpersonTelefonnummer", {
            required: "Feltet er påkrevd",
          })}
          defaultValue={
            globalFormState.kommunikasjonFormFields.kontaktpersonTelefonnummer
          }
          error={errors.kontaktpersonTelefonnummer?.message}
      />

      <Textarea
        label={optionalText(
          fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger,
        )}
        description="Dersom det er behov for å gi mer opplysninger"
        {...register("utfyllendeOpplysninger")}
        defaultValue={
          globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger
        }
      />
    </FormPage>
  );
}
