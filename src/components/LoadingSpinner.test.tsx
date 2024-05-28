import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LoadingSpinner } from './LoadingSpinner';

describe('Loading Spinner Component', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <LoadingSpinner color="red" key={'red'} size={30} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
