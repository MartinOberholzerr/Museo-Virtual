import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonMute from './buttonMute';

test('ButtonMute toggles muted state on click', () => {
  const { getByText } = render(<ButtonMute />);
  const button = getByText('Mute');

  fireEvent.click(button);

  expect(button.textContent).toBe('Unmute');

  fireEvent.click(button);

  expect(button.textContent).toBe('Mute');
});