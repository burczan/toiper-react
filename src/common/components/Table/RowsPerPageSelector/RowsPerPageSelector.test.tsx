import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RowsPerPageSelector } from '.';

const rowsPerPageOptions = [2, 4, 6];
const rowsPerPage = rowsPerPageOptions[0];

describe('<RowsPerPageSelector />', () => {
  it('renders without crashing', () => {
    const onSelectorChange = jest.fn();
    render(
      <RowsPerPageSelector
        options={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        onSelectorChange={onSelectorChange}
      />,
    );
    expect(screen.getByText(/rows per page:/i)).toBeInTheDocument();
    rowsPerPageOptions.forEach((option) => {
      expect(screen.getByText(option.toString())).toBeInTheDocument();
    });
  });

  it('sets option to active when option is clicked', () => {
    const RowsPerPageSelectorTest = () => {
      const [currentOption, setCurrentOption] = useState(rowsPerPageOptions[0]);
      return (
        <RowsPerPageSelector
          options={rowsPerPageOptions}
          rowsPerPage={currentOption}
          onSelectorChange={setCurrentOption}
        />
      );
    };
    render(<RowsPerPageSelectorTest />);
    expect(screen.getByText(/2/)).toHaveClass('is-current');
    userEvent.click(screen.getByText(/6/));
    expect(screen.getByText(/6/)).toHaveClass('is-current');
  });

  it('calls onSelectorChange when option is clicked', () => {
    const onSelectorChange = jest.fn((option) => expect(option).toEqual(6));
    render(
      <RowsPerPageSelector
        options={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        onSelectorChange={onSelectorChange}
      />,
    );
    userEvent.click(screen.getByText(/6/));
    expect(onSelectorChange).toHaveBeenCalledTimes(1);
  });
});
