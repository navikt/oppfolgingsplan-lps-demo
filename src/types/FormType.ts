export type ArbeidsoppgaveFormFields = {
  stilling: string;
  arbeidsoppgaver: string;
  arbeidsoppgaverikkeutfores: string;
};

export type VirksomhetFormFields = {
  virksomhetsnavn: string;
  virksomhetsnummer: string;
  narmestelederfornavn: string;
  narmestelederetternavn: string;
  narmesteledertelefonnummer: string;
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
    sykmeldtHarMedvirket: boolean;
}

export type OppfolgingsplanFormFields = {
  arbeidsoppgaveFields: ArbeidsoppgaveFormFields;
  virksomhetFormFields: VirksomhetFormFields;
  kommunikasjonFormFields: KommunikasjonFormFields;
  tilretteleggingFormFields: TilretteleggingFormFields;
  medvirkningFormFields: MedvirkningFormFields;
};
