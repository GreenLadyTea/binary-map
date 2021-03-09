import React from 'react';
import BinaryRow from './BinaryRow';
import { render, screen } from '@testing-library/react';

test('1 and 0 have classes and they go in particular order', () => {
  const number = 118;
  const binaryString = '01110110';
  render(<BinaryRow number={number} />);
  const row = screen.getByTestId('row');
  expect(row).toBeInTheDocument();
  const digits = screen.getAllByTestId('digit');
  expect(digits).toHaveLength(8);
  for (let i = 0; i < digits.length; i++) {
    expect(digits[i]).toHaveClass(binaryString[i] === '0' ? 'zero' : 'one');
  }
  for (let i = 0; i < digits.length; i++) {
    expect(digits[i]).toHaveTextContent(binaryString[i] === '0' ? '0' : '1');
  }
});
