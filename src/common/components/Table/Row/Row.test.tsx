import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { RowWithoutColumns } from './WithoutColumns';

describe('<RowWithoutColumns />', () => {
  it('renders one cell expanded to all columns', () => {
    const numberOfColumnsInTable = 3;
    render(
      <table>
        <tbody>
          <RowWithoutColumns type="empty" colSpan={numberOfColumnsInTable} />
        </tbody>
      </table>,
    );
    expect(screen.queryAllByRole('cell')).toHaveLength(1);
  });

  it("renders 'No results to display' inside cell if type is equal to 'empty'", () => {
    const numberOfColumnsInTable = 3;
    render(
      <table>
        <tbody>
          <RowWithoutColumns type="empty" colSpan={numberOfColumnsInTable} />
        </tbody>
      </table>,
    );
    expect(within(screen.getByRole('cell')).getByText('No results to display.')).toBeTruthy();
  });

  it("renders loading spinner inside cell if type is equal to 'loading'", () => {
    const numberOfColumnsInTable = 3;
    render(
      <table>
        <tbody>
          <RowWithoutColumns type="loading" colSpan={numberOfColumnsInTable} />
        </tbody>
      </table>,
    );
    expect(within(screen.getByRole('cell')).getByText(/spinner\.svg/i)).toBeTruthy();
  });
});
