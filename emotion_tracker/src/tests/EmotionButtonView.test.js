import React from 'react';
import {render} from '@testing-library/react';
import EmotionButtonView from '../views/EmotionButtonView';

describe('EmotionButtonView', () => {
  test('renders "How are you feeling?" text', () => {
    const {getByText} = render(<EmotionButtonView />);
    const textElement = getByText(/How are you feeling?/i);
    expect(textElement).toBeInTheDocument();
  });
});