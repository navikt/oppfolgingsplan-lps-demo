"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { OppfolgingsplanFormFields } from "@/types/FormType";
import { booleanToJaNei } from "@/text/textUtils";

interface Props {
  globalFormState: OppfolgingsplanFormFields;
}

export const KommunikasjonGroup = ({ globalFormState }: Props) => {
  return (
    <>
      <FieldGroup heading="Informasjon til NAV og fastlege">
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.mottaker}
          value={globalFormState.kommunikasjonFormFields.mottaker.toString()}
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
          value={booleanToJaNei(
            globalFormState.kommunikasjonFormFields.trengerHjelpFraNav,
          )}
        />
        <FieldItem
          label={
            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
          }
          value={
            globalFormState.kommunikasjonFormFields
              .trengerHjelpFraNavBeskrivelse
          }
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.beskjedTilFastlege}
          value={globalFormState.kommunikasjonFormFields.beskjedTilFastlege}
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
          value={booleanToJaNei(
            globalFormState.kommunikasjonFormFields.sykmeldtHarMedvirket,
          )}
        />
        <FieldItem
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          value={
            globalFormState.kommunikasjonFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
        />
        <FieldGroup heading="Kontaktperson">
          <FieldItem
            label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
            value={globalFormState.kommunikasjonFormFields.kontaktpersonNavn}
          />
          <FieldItem
            label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
            value={
              globalFormState.kommunikasjonFormFields.kontaktpersonTelefonnummer
            }
          />
        </FieldGroup>
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
          value={globalFormState.kommunikasjonFormFields.utfyllendeOpplysninger}
        />
      </FieldGroup>
    </>
  );
};
