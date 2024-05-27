export interface Country {
  id: number;
  name: string;
  region: string;
  'alpha-2': string;
  'alpha-3': string;
  'iso_3166-2': string;
  'sub-region': string;
  'region-code': string;
  'country-code': string;
  'sub-region-code': string;
  'intermediate-region': string;
  'intermediate-region-code': string;
}

export type Fetch = typeof fetch;
