import React from 'react';
import { PaperTypes } from '../../state/papers/types';
import { FormButton, Input, Select } from '../../common/components/Forms';
import { CustomValidationRules, ErrorMessages } from '../../common/components/Forms/helpers/validation';

type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
};

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

export type FormControls = {
  name: string;
  price: string;
  layers: string;
  leafs: string;
  type: PaperTypes;
  length: string;
};

export const initFormControls: FormControls = {
  name: '',
  price: '',
  layers: '',
  leafs: '',
  type: PaperTypes.toilet,
  length: '',
};

export const initErrorMessages: ErrorMessages<FormControls> = {
  name: '',
  price: '',
  layers: '',
  leafs: '',
  type: '',
  length: '',
};

export const customRules = (target: EventTarget & HTMLInputElement, invalidNames: string[]) => {
  return {
    name: [
      {
        condition: target.value.length > 3,
        errorMessage: 'Too long.',
      },
      {
        condition: invalidNames.includes(target.value),
        errorMessage: 'This name is already taken.',
      },
    ],
    price: [
      {
        condition: target.valueAsNumber === 1,
        errorMessage: 'Cannot be equal 1',
      },
    ],
    leafs: [
      {
        condition: target.valueAsNumber === 2,
        errorMessage: 'Cannot be equal 2',
      },
    ],
    layers: [
      {
        condition: target.valueAsNumber === 3,
        errorMessage: 'Cannot be equal 3',
      },
    ],
    length: [
      {
        condition: target.valueAsNumber === 4,
        errorMessage: 'Cannot be equal 4',
      },
    ],
  } as CustomValidationRules<FormControls>;
};

export const PaperType = ({ onChange, value }: SelectProps) => {
  return (
    <Select
      name="type"
      label="Type"
      htmlFor="type"
      onChange={onChange}
      value={value}
      horizontal
    >
      {[
        { value: PaperTypes.toilet, children: 'Toilet' },
        { value: PaperTypes.towel, children: 'Towel' },
      ]}
    </Select>
  );
};

export const PaperName = ({ value, onChange, error }: InputProps) => {
  return (
    <Input
      htmlFor="name"
      name="name"
      placeholder="name"
      type="text"
      value={value}
      onChange={onChange}
      label="Name"
      required
      horizontal
      helperText={error}
    />
  );
};

export const PaperPrice = ({ value, onChange, error }: InputProps) => {
  return (
    <Input
      htmlFor="price"
      name="price"
      placeholder="price"
      type="number"
      value={value}
      onChange={onChange}
      min={0}
      step={0.01}
      label="Price"
      required
      horizontal
      helperText={error}
    />
  );
};

export const PaperLayers = ({ value, onChange, error }: InputProps) => {
  return (
    <Input
      htmlFor="layers"
      name="layers"
      placeholder="layers"
      type="number"
      value={value}
      onChange={onChange}
      min={1}
      label="Layers"
      required
      horizontal
      helperText={error}
    />
  );
};

export const PaperLeafs = ({ value, onChange, error }: InputProps) => {
  return (
    <Input
      htmlFor="leafs"
      name="leafs"
      placeholder="leafs"
      type="number"
      value={value}
      onChange={onChange}
      min={1}
      label="Leafs"
      required
      horizontal
      helperText={error}
    />
  );
};

export const PaperLength = ({ value, onChange, error }: InputProps) => {
  return (
    <Input
      htmlFor="length"
      name="length"
      placeholder="length"
      type="number"
      value={value}
      onChange={onChange}
      min={1}
      label="Length"
      required
      horizontal
      helperText={error}
    />
  );
};

export const SubmitButton = ({ disabled, text }: { disabled: boolean, text: string }) => {
  return (
    <FormButton type="submit" color="primary" horizontal disabled={disabled}>
      {text}
    </FormButton>
  );
};
