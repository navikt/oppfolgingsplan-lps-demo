import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";
import { booleanToJaNei } from "@/text/textUtils";

export const TilretteleggingSummary = () => {
  const { globalFormState } = useGlobalState();
  return (
    <VStack gap="4">
      <SummaryField
        fieldName={
          fieldTexts.tilretteleggingTexts.tidligereTilretteleggingJaNei
        }
        fieldValue={booleanToJaNei(
          globalFormState.jobbOgMuligheterFormFields.tidligereTilrettelegging,
        )}
      />
      <SummaryField
        fieldName={
          fieldTexts.tilretteleggingTexts.tidligereTilretteleggingBeskrivelse
        }
        fieldValue={
          globalFormState.jobbOgMuligheterFormFields
            .tidligereTilretteleggingBeskrivelse
        }
      />
      <SummaryField
        fieldName={
          fieldTexts.tilretteleggingTexts.tilretteleggingIDennePerioden
        }
        fieldValue={
          globalFormState.jobbOgMuligheterFormFields
            .tilretteleggingIDennePerioden
        }
      />
      <SummaryField
        fieldName={fieldTexts.tilretteleggingTexts.muligheterForTilrettelegging}
        fieldValue={
          globalFormState.jobbOgMuligheterFormFields
            .muligheterForTilrettelegging
        }
      />
    </VStack>
  );
};
