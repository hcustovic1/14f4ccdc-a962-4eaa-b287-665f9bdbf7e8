import { describe, it, expect } from 'vitest';
import { getCountryFlagUrl } from './getCountryFlagUrl';

describe('getCountryFlagUrl', () => {
  it('should return the correct URL for a given country code in lowercase', () => {
    const countryCode = 'us';
    const expectedUrl = '/flags/us.svg';
    const result = getCountryFlagUrl(countryCode);
    expect(result).toBe(expectedUrl);
  });

  it('should return the correct URL for a given country code in uppercase', () => {
    const countryCode = 'US';
    const expectedUrl = '/flags/us.svg';
    const result = getCountryFlagUrl(countryCode);
    expect(result).toBe(expectedUrl);
  });

  it('should return the correct URL for a given country code in mixed case', () => {
    const countryCode = 'uS';
    const expectedUrl = '/flags/us.svg';
    const result = getCountryFlagUrl(countryCode);
    expect(result).toBe(expectedUrl);
  });

  it('should handle country codes with special characters correctly', () => {
    const countryCode = 'de-CH'; // Swiss German, for example
    const expectedUrl = '/flags/de-ch.svg';
    const result = getCountryFlagUrl(countryCode);
    expect(result).toBe(expectedUrl);
  });

  it('should handle empty country code correctly', () => {
    const countryCode = '';
    const expectedUrl = '/flags/.svg';
    const result = getCountryFlagUrl(countryCode);
    expect(result).toBe(expectedUrl);
  });
});
