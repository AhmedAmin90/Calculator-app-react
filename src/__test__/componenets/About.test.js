import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../../components/About';



it('Should renders correctly', () => {
    const elem = create(<About />).toJSON();
    expect(elem).toMatchSnapshot();
  });

test('displays heading', () => {
  render(<About />);
  const heading = screen.getByText('AHMED AMIM WEB DEVELOPER');
  expect(heading).toBeInTheDocument;
});
