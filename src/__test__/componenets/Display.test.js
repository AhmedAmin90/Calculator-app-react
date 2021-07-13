/* eslint-disable no-unused-expressions */
import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Display from '../../components/Display';

test('It takes result prop and render correctly', () => {
  render(<Display result="5" />);
  const elem = create(<Display result="5" />);
  expect(elem).toMatchSnapshot();
  const displayResult = screen.getByText('5');
  expect(displayResult).toBeInTheDocument;
  expect(displayResult).toBeString;
});
