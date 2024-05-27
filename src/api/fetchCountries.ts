export type Fetch = typeof fetch;

export const fetchCountries = async (fetch: Fetch) => {
  const response = await fetch(process.env.NEXT_PUBLIC_COUNTRIES_API);

  if (!response.ok) {
    throw new Error('Failed to fetch countries data!');
  }

  return response.json();
};
