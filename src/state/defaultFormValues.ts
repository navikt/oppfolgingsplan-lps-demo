import { OppfolgingsplanFormFields } from "@/types/FormType";

export const defaultFormValues: OppfolgingsplanFormFields = {
  arbeidsoppgaveFields: {
    stilling: "",
    arbeidsoppgaver: "",
    arbeidsoppgaverikkeutfores: "",
  },
  oppfolgingsansvarligFormFields: {
    fornavn: "Ståle",
    etternavn: "Svelesen",
    telefonnummer: "99999999",
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
