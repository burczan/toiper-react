/* eslint-disable jest/no-commented-out-tests */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '.';

const value = 'banana';
const newValue = 'mango';
const placeholder = 'apple';

describe('<Input />', () => {
  it('renders without crashing', () => {
    const onChange = jest.fn();
    render(
      <Input
        value={value}
        onChange={onChange}
      />,
    );
    expect(screen.getByDisplayValue(value)).toHaveValue(value);
  });

  it('calls onChange when value changes', () => {
    const onChange = jest.fn();

    render(
      <Input
        value={value}
        onChange={onChange}
      />,
    );
    userEvent.type(screen.getByDisplayValue(value), newValue);
    expect(onChange).toHaveBeenCalledTimes(newValue.length);
  });

  it('automatically focuses on input', () => {
    const onChange = jest.fn();

    render(
      <Input
        value={value}
        onChange={onChange}
        autofocus
      />,
    );
    userEvent.type(screen.getByDisplayValue(value), newValue, { skipClick: true });
    expect(onChange).toHaveBeenCalledTimes(newValue.length);
  });

  it('sets placeholder text', () => {
    const onChange = jest.fn();

    render(
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />,
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});

// it('Calls onChange on input value change.', () => {
//   const value = 'Tonik';
//   const mockOnClick = jest.fn();
//   const { getByDisplayValue } = render(
//     <Input
//       value={value}
//       onChange={mockOnClick}
//     />,
//   );
//   fireEvent.change(getByDisplayValue(value), { target: { value: 'React' } });
//   expect(mockOnClick).toHaveBeenCalled();
// });

// describe('<Input />', () => {
//   it('renders without crashing', () => {
//     const onChangeMock = jest.fn();
//     render(
//       <Input
//         type={type}
//         name={name}
//         onChange={onChangeMock}
//         value={value}
//       />,
//     );
//     expect(screen.getByDisplayValue(value)).toBeInTheDocument();
//   });

//   it('calls onChange when input value changes', () => {
//     const onChangeMock = jest.fn();
//     render(
//       <Input
//         type={type}
//         name={name}
//         onChange={onChangeMock}
//         value={value}
//       />,
//     );
//     userEvent.type(screen.getByDisplayValue(value), 'ex');
//     expect(onChangeMock).toHaveBeenCalledTimes(2);
//   });
// });
