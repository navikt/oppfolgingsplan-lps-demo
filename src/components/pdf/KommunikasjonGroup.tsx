"use client";
import { FieldGroup } from "@/components/pdf/FieldGroup";
import { FieldItem } from "@/components/pdf/FieldItem";
import { fieldTexts } from "@/text/fieldTexts";
import React from "react";
import { InnsendingFormFields } from "@/types/FormType";
import { booleanToJaNei } from "@/text/textUtils";

interface Props {
  globalFormState: InnsendingFormFields;
}

export const KommunikasjonGroup = ({ globalFormState }: Props) => {
  return (
    <>
      <FieldGroup heading="Informasjon til NAV og fastlege">
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.mottaker}
          value={globalFormState.infoTilNavOgLegeFormFields.mottaker.toString()}
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAV}
          value={booleanToJaNei(
            globalFormState.infoTilNavOgLegeFormFields.trengerHjelpFraNav,
          )}
        />
        <FieldItem
          label={
            fieldTexts.kommunikasjonTexts.trengerDereHjelpFraNAVBeskrivelse
          }
          value={
            globalFormState.infoTilNavOgLegeFormFields
              .trengerHjelpFraNavBeskrivelse
          }
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.beskjedTilFastlege}
          value={globalFormState.infoTilNavOgLegeFormFields.beskjedTilFastlege}
        />
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.harSykmeldtMedvirket}
          value={booleanToJaNei(
            globalFormState.infoTilNavOgLegeFormFields.sykmeldtHarMedvirket,
          )}
        />
        <FieldItem
          label={
            fieldTexts.kommunikasjonTexts.sykmeldtHarIkkeMedvirketBegrunnelse
          }
          value={
            globalFormState.infoTilNavOgLegeFormFields
              .sykmeldtHarIkkeMedvirketBegrunnelse
          }
        />
        <FieldGroup heading="Kontaktperson">
          <FieldItem
            label={fieldTexts.kommunikasjonTexts.kontaktpersonNavn}
            value={globalFormState.infoTilNavOgLegeFormFields.kontaktpersonNavn}
          />
          <FieldItem
            label={fieldTexts.kommunikasjonTexts.kontaktpersonTelefonnummer}
            value={
              globalFormState.infoTilNavOgLegeFormFields.kontaktpersonTelefonnummer
            }
          />
          <FieldItem
            label={fieldTexts.kommunikasjonTexts.kontaktpersonEpost}
            value={
              globalFormState.infoTilNavOgLegeFormFields.kontaktpersonEpost
            }
          />
        </FieldGroup>
        <FieldItem
          label={fieldTexts.kommunikasjonTexts.utfyllendeOpplysninger}
          value={globalFormState.infoTilNavOgLegeFormFields.utfyllendeOpplysninger}
        />
      </FieldGroup>
    </>
  );
};
