import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const ArbeidsoppgaverSummary = () => {
  const { globalFormState } = useGlobalState();

  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.stilling}
        fieldValue={globalFormState.arbeidsoppgaveFields.stilling}
      />
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaver}
        fieldValue={globalFormState.arbeidsoppgaveFields.arbeidsoppgaver}
      />
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverikkeutfores}
        fieldValue={
          globalFormState.arbeidsoppgaveFields.arbeidsoppgaverikkeutfores
        }
      />
    </VStack>
  );
};
