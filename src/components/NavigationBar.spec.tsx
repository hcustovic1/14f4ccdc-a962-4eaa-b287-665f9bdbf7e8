import { render, fireEvent, screen } from '@testing-library/react';
import { NavigationBar } from './NavigationBar';
import { describe, it, expect, beforeEach, vi } from 'vitest';

const mockedUseLocalizationStore = vi.fn();
const setShouldShowLanguagePickerMock = vi.fn();

const mockStore = {
  language: 'en',
  shouldShowLanguagePicker: false,
  setShouldShowLanguagePicker: setShouldShowLanguagePickerMock,
};

describe('NavigationBar component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders navigation bar with language button', () => {
    mockedUseLocalizationStore.mockReturnValue(mockStore);

    const { getByText } = render(<NavigationBar />);

    // Assert that the navigation bar renders with the correct text
    getByText('Welcome User!');
    getByText('en');
  });
});
