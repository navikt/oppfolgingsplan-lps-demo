import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const ArbeidsoppgaverSummary = () => {
  const { globalFormState } = useGlobalState();

  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.typiskArbeidshverdag}
        fieldValue={globalFormState.jobbOgMuligheterFormFields.typiskArbeidshverdag}
      />
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomKanUtfores}
        fieldValue={globalFormState.jobbOgMuligheterFormFields.arbeidsoppgaverSomKanUtfores}
      />
      <SummaryField
        fieldName={fieldTexts.arbeidsoppgaveTexts.arbeidsoppgaverSomIkkeKanUtfores}
        fieldValue={
          globalFormState.jobbOgMuligheterFormFields.arbeidsoppgaverSomIkkeKanUtfores
        }
      />
    </VStack>
  );
};
