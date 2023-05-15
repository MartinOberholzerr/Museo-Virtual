import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import VolumeSlider from './volumeSlider';

test('VolumeSlider updates volume on range change', () => {
  const { getByLabelText, getByText } = render(<VolumeSlider />);
  const rangeInput = getByLabelText('Volume');
  const volumeValue = getByText('50');

  fireEvent.change(rangeInput, { target: { value: '75' } });

  expect(volumeValue.textContent).toBe('75');
});