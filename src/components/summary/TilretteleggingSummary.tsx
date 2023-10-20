import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";

export const TilretteleggingSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.tilretteleggingTexts.tidligereTilrettelegging}
        fieldValue={
          globalFormState.tilretteleggingFormFields.tidligereTilrettelegging
        }
      />
      <SummaryField
        fieldName={fieldTexts.tilretteleggingTexts.tilretteleggingIDag}
        fieldValue={
          globalFormState.tilretteleggingFormFields.tilretteleggingIDag
        }
      />
      <SummaryField
        fieldName={fieldTexts.tilretteleggingTexts.fremtidigTilrettelegging}
        fieldValue={
          globalFormState.tilretteleggingFormFields.fremtidigTilrettelegging
        }
      />
    </VStack>
  );
};
