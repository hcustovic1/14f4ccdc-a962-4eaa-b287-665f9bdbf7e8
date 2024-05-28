import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import LanguagePickerWithTabs from './LanguagePicker';
import { groupedCountriesMock } from '@/__mocks__/countriesMock';

describe('LanguagePickerWithTabs', () => {
  it('renders tabs correctly', () => {
    render(<LanguagePickerWithTabs groupedCountries={groupedCountriesMock} />);

    expect(screen.getByText('Europe')).toBeInTheDocument();
    expect(screen.getByText('Asia')).toBeInTheDocument();
  });

  it('renders countries for selected region', () => {
    render(<LanguagePickerWithTabs groupedCountries={groupedCountriesMock} />);

    fireEvent.click(screen.getByText('Asia'));

    expect(screen.getByText('Japan')).toBeInTheDocument();
    expect(screen.getByText('China')).toBeInTheDocument();
    expect(screen.queryByText('Germany')).not.toBeInTheDocument();
    expect(screen.queryByText('France')).not.toBeInTheDocument();
  });

  it('renders no countries message if no countries found for region', () => {
    render(<LanguagePickerWithTabs groupedCountries={{}} />);

    expect(
      screen.getByText('No countries found for this region.')
    ).toBeInTheDocument();
  });
});
