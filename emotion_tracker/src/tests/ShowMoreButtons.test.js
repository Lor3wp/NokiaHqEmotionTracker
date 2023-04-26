import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShowMoreButton from '../components/ShowMoreButton';

describe('ShowMoreButton', () => {
  test('renders button with text "Show more emotions"', () => {
    const { getByText } = render(<ShowMoreButton />);
    expect(getByText('Show more emotions')).toBeInTheDocument();
  });

  test('calls clickHandler function when button is clicked', () => {
    const mockClickHandler = jest.fn();
    const mockShowMore = jest.fn();
    const { getByText } = render(
      <ShowMoreButton showMore={true} setShowMore={mockShowMore} />
    );

    const button = getByText('Show more emotions');
    fireEvent.click(button);

    expect(mockClickHandler).toHaveBeenCalled();
  });

  test('sets showMore state to opposite value when button is clicked', () => {
    const mockSetShowMore = jest.fn();
    const { getByText } = render(
      <ShowMoreButton showMore={true} setShowMore={mockSetShowMore} />
    );

    const button = getByText('Show more emotions');
    fireEvent.click(button);

    expect(mockSetShowMore).toHaveBeenCalledWith(false);
  });
});
