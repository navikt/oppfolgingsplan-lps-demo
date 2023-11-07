export type ArbeidsoppgaveFormFields = {
  stilling: string;
  arbeidsoppgaver: string;
  arbeidsoppgaverikkeutfores: string;
};

export type OppfolgingsansvarligFormFields = {
  fornavn: string;
  etternavn: string;
  telefonnummer: string;
};

export type KommunikasjonFormFields = {
  mottaker: string[];
  bistandFraNav: string;
  avklaringSykmelder: string;
  utfyllendeOpplysninger: string;
};

export type TilretteleggingFormFields = {
    tidligereTilrettelegging: string;
    tilretteleggingIDag: string;
    fremtidigTilrettelegging: string;
}

export type MedvirkningFormFields = {
    sykmeldtHarMedvirket: boolean | null;
}

export type OppfolgingsplanFormFields = {
  arbeidsoppgaveFields: ArbeidsoppgaveFormFields;
  oppfolgingsansvarligFormFields: OppfolgingsansvarligFormFields;
  kommunikasjonFormFields: KommunikasjonFormFields;
  tilretteleggingFormFields: TilretteleggingFormFields;
  medvirkningFormFields: MedvirkningFormFields;
};
