import { OppfolgingsplanFormFields } from "@/types/FormType";

export const defaultFormValues: OppfolgingsplanFormFields = {
  arbeidsoppgaveFields: {
    stilling: "",
    arbeidsoppgaver: "",
    arbeidsoppgaverikkeutfores: "",
  },
  virksomhetFormFields: {
    virksomhetsnavn: "",
    virksomhetsnummer: "",
    narmestelederfornavn: "",
    narmestelederetternavn: "",
    narmesteledertelefonnummer: "",
  },
  kommunikasjonFormFields: {
    mottaker: [],
    bistandFraNav: "",
    avklaringSykmelder: "",
    utfyllendeOpplysninger: "",
  },
  tilretteleggingFormFields: {
    tidligereTilrettelegging: "",
    tilretteleggingIDag: "",
    fremtidigTilrettelegging: "",
  },
  medvirkningFormFields: {
    sykmeldtHarMedvirket: false
  }
};
