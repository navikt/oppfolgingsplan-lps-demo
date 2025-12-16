"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { FollowUpPlanDTO } from "@/dto/FollowUpPlanDTO";
import { defaultFormValues } from "@/state/defaultFormValues";
import { InnsendingFormFields } from "@/types/FormType";

export const AppStateContext = createContext<FormContext>({
  globalFormState: defaultFormValues,
  globalFormStateDispatch: () => {
    return;
  },
});

interface Props {
  children: ReactNode;
}

type FormContext = {
  globalFormState: InnsendingFormFields;
  globalFormStateDispatch: Dispatch<SetStateAction<InnsendingFormFields>>;
};

export function FormStateProvider({ children }: Props) {
  const [formValues, setFormValues] =
    useState<InnsendingFormFields>(defaultFormValues);
  return (
    <AppStateContext.Provider
      value={{
        globalFormState: formValues,
        globalFormStateDispatch: setFormValues,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within the FormStateProvider");
  }
  return context;
}

export function globalStateToFollowUpPlanDTO(
  globalFormState: InnsendingFormFields,
): FollowUpPlanDTO {
  const { oppfolgingsplanFormFields, infoTilNavOgLegeFormFields } =
    globalFormState;

  return {
    employeeIdentificationNumber: "01898299631",
    typicalWorkday: oppfolgingsplanFormFields.typiskArbeidshverdag,
    tasksThatCanStillBeDone:
      oppfolgingsplanFormFields.arbeidsoppgaverSomKanUtfores,
    tasksThatCanNotBeDone:
      oppfolgingsplanFormFields.arbeidsoppgaverSomIkkeKanUtfores,
    previousFacilitation:
      oppfolgingsplanFormFields.tidligereTilretteleggingBeskrivelse,
    plannedFacilitation:
      oppfolgingsplanFormFields.tilretteleggingIDennePerioden,
    otherFacilitationOptions:
      oppfolgingsplanFormFields.muligheterForTilrettelegging,
    followUp: oppfolgingsplanFormFields.oppfolging,
    evaluationDate: oppfolgingsplanFormFields.evalueringsdato!.toISOString(),
    sendPlanToNav: infoTilNavOgLegeFormFields.mottaker.includes("NAV"),
    needsHelpFromNav: infoTilNavOgLegeFormFields.trengerHjelpFraNav,
    needsHelpFromNavDescription:
      infoTilNavOgLegeFormFields.trengerHjelpFraNavBeskrivelse,
    sendPlanToGeneralPractitioner:
      infoTilNavOgLegeFormFields.mottaker.includes("LEGE"),
    messageToGeneralPractitioner: infoTilNavOgLegeFormFields.beskjedTilFastlege,
    additionalInformation: infoTilNavOgLegeFormFields.utfyllendeOpplysninger,
    contactPersonFullName: infoTilNavOgLegeFormFields.kontaktpersonNavn,
    contactPersonPhoneNumber:
      infoTilNavOgLegeFormFields.kontaktpersonTelefonnummer,
    contactPersonEmail: infoTilNavOgLegeFormFields.kontaktpersonEpost,
    employeeHasContributedToPlan:
      infoTilNavOgLegeFormFields.sykmeldtHarMedvirket!,
    employeeHasNotContributedToPlanDescription:
      infoTilNavOgLegeFormFields.sykmeldtHarIkkeMedvirketBegrunnelse,
    lpsName: "Svele",
  };
}
