import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from '.';

const pages = ['1', '2', '3'];

describe('<Pagination />', () => {
  it('renders without crashing', () => {
    const currentPage = 1;
    const onPageChange = jest.fn();
    render(
      <Pagination
        currentPage={currentPage}
        totalPageNumber={pages.length}
        onPageChange={onPageChange}
      />,
    );
    pages.forEach((page) => {
      expect(screen.getByText(page)).toBeInTheDocument();
    });
  });

  it('sets page to active when option is clicked', () => {
    const PaginationTest = () => {
      const [currentPage, setCurrentPage] = useState(1);
      return (
        <Pagination
          currentPage={currentPage}
          totalPageNumber={pages.length}
          onPageChange={setCurrentPage}
        />
      );
    };
    render(<PaginationTest />);
    expect(screen.getByText('1')).toHaveClass('is-current');
    userEvent.click(screen.getByText('2'));
    expect(screen.getByText('2')).toHaveClass('is-current');
  });

  it('calls onPageChange when page is clicked', () => {
    const currentPage = 1;
    const onPageChange = jest.fn((page) => expect(page).toEqual(2));
    render(
      <Pagination
        currentPage={currentPage}
        totalPageNumber={pages.length}
        onPageChange={onPageChange}
      />,
    );
    userEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledTimes(1);
  });
});
