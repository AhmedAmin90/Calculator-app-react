import React from 'react';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/Button';

test('Takes Name , color and clickHandler props', () => {
const elem = create(<Button color="#E0E0E0" name="AC" clickHandler={() => 'This is a test'}/>);
expect(elem).toMatchSnapshot();
  render(<Button color="#E0E0E0" name="AC" clickHandler={() => 'This is a test'} />);
  const btn = screen.getByRole('main');
  const btnName = screen.getByText('AC');
  expect(btnName).toBeString;
  expect(btnName).toBeInTheDocument;
  expect(btn.style.backgroundColor).toBe('rgb(224, 224, 224)');
});
