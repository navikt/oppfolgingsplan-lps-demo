import { VStack } from "@navikt/ds-react";
import { SummaryField } from "@/components/summary/SummaryField";
import { fieldTexts } from "@/text/fieldTexts";
import { useGlobalState } from "@/state/appState";
import { getLongDateFormat } from "@/utils/dateUtils";

export const OppfolgingSummary = () => {
  const { globalFormState } = useGlobalState();

  return (
    <VStack gap="4">
      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.periodeFra}
        fieldValue={getLongDateFormat(
          globalFormState.oppfolgingsplanFormFields.periodeFra,
        )}
      />

      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.periodeTil}
        fieldValue={getLongDateFormat(
          globalFormState.oppfolgingsplanFormFields.periodeTil,
        )}
      />

      <SummaryField
        fieldName={fieldTexts.oppfolgingsplanTexts.oppfolging}
        fieldValue={globalFormState.oppfolgingsplanFormFields.oppfolging}
      />
    </VStack>
  );
};
