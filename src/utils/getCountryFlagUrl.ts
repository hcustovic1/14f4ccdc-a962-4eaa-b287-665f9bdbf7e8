export const getCountryFlagUrl = (countryCode: string): string => {
  return `/flags/${countryCode.toLowerCase()}.svg`;
};
