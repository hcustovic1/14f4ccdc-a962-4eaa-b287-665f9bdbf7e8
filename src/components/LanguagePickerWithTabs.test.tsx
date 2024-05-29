import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { groupedCountriesMock } from '@/__mocks__/countriesMock';
import { LanguagePickerWithTabs } from './LanguagePickerWithTabs';

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
});
