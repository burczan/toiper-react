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
        htmlFor="banana"
        name="banana"
        type="text"
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
        htmlFor="banana"
        name="banana"
        type="text"
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
        htmlFor="banana"
        name="banana"
        type="text"
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
        htmlFor="banana"
        name="banana"
        type="text"
      />,
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });
});
