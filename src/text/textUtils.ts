export const optionalText = (text: string) => {
  return text + " (valgfritt)";
};

export const booleanToJaNei = (val?: boolean | null) => {
  if (val === null || val === undefined) return null;

  if (val) {
    return "Ja";
  }
  return "Nei";
};
