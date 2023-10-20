import { OppfolgingsplanFormFields } from "@/types/FormType";

export const defaultFormValues: OppfolgingsplanFormFields = {
  arbeidsoppgaveFields: {
    stilling: "",
    arbeidsoppgaver: "",
    arbeidsoppgaverikkeutfores: "",
  },
  virksomhetFormFields: {
    virksomhetsnavn: "Svele",
    virksomhetsnummer: "9999999999",
    narmestelederfornavn: "Ståle",
    narmestelederetternavn: "Svelesen",
    narmesteledertelefonnummer: "99999999",
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
