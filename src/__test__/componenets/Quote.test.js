/* eslint-disable no-unused-expressions */
import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../../components/Quote';

it('Should renders correctly', () => {
  const elem = create(<Quote />).toJSON();
  expect(elem).toMatchSnapshot();
});

test('displays heading', () => {
  render(<Quote />);
  const heading = screen.getByText('Quote of the day');
  expect(heading).toBeInTheDocument;
});
