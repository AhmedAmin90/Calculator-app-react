/* eslint-disable no-unused-expressions */
import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../../components/Calculator';

test('Contains heading with text', () => {
  render(<Calculator />);
  const elem = create(<Calculator />);
  expect(elem).toMatchSnapshot();
  const heading = screen.getByText('Lets Do Some Math !');
  expect(heading).toBeInTheDocument;
});
