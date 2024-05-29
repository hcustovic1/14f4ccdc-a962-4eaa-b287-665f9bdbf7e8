import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Tabs from './Tabs';
import { describe, expect, it, vi } from 'vitest';

describe('<Tabs />', () => {
  it('renders tabs correctly', () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const onSelectTab = vi.fn();

    const { getByText } = render(
      <Tabs tabs={tabs} onSelectTab={onSelectTab} />
    );

    tabs.forEach((tab) => {
      const tabButton = getByText(tab);
      expect(tabButton).toBeInTheDocument();
    });
  });

  it('selects tab when clicked', () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const onSelectTab = vi.fn();

    const { getByText } = render(
      <Tabs tabs={tabs} onSelectTab={onSelectTab} />
    );

    const tabButton = getByText('Tab 2');
    fireEvent.click(tabButton);

    expect(onSelectTab).toHaveBeenCalledWith('Tab 2');
  });

  it('applies active styles to selected tab', () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const onSelectTab = vi.fn();

    const { getByText } = render(
      <Tabs tabs={tabs} onSelectTab={onSelectTab} />
    );

    const tabButton = getByText('Tab 2');
    fireEvent.click(tabButton);

    expect(tabButton).toHaveClass('text-blue-500');
    expect(tabButton).toHaveClass('border-b-2');
    expect(tabButton).toHaveClass('border-blue-500');
  });

  it('has the correct aria attributes for accessibility', () => {
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    const onSelectTab = vi.fn();

    const { getByText } = render(
      <Tabs tabs={tabs} onSelectTab={onSelectTab} />
    );

    const tabButton = getByText('Tab 2');
    fireEvent.click(tabButton);

    tabs.forEach((tab) => {
      const tabButton = getByText(tab);
      if (tab === 'Tab 2') {
        expect(tabButton).toHaveAttribute('aria-current', 'page');
      } else {
        expect(tabButton).not.toHaveAttribute('aria-current');
      }
    });
  });
});
