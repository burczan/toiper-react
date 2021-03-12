import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PaperTypes } from '../../state/papers/types';
import { getTakenNames } from '../../state/papers/selectors';
import { addPaper, AddPaperFormControls } from '../../state/papers/actionCreators';
import {
  validateInput,
  hasError,
  ErrorMessages,
  CustomValidationRules,
} from '../../common/components/Forms/helpers/validation';
import { useTypedSelector } from '../../common/hooks';
import { FormButton, Input, Select } from '../../common/components/Forms';

type FormControls = {
  name: string;
  price: string;
  layers: string;
  leafs: string;
  type: PaperTypes;
  length: string;
};

const initFormControls: FormControls = {
  name: '',
  price: '',
  layers: '',
  leafs: '',
  type: PaperTypes.toilet,
  length: '',
};

const initErrorMessages: ErrorMessages<FormControls> = {
  name: '',
  price: '',
  layers: '',
  leafs: '',
  type: '',
  length: '',
};

export const AddPaperForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [formControls, setFormControls] = useState(initFormControls);
  const [errors, setErrors] = useState(initErrorMessages);
  const [isFormValid, setIsFormValid] = useState(false);

  const takenNames = useTypedSelector(getTakenNames);
  const [names, setName] = useState(takenNames);

  useEffect(() => {
    if (formRef.current?.checkValidity()) {
      setIsFormValid(true);
    }
  }, [formControls]);

  useEffect(() => {
    const error = hasError(errors);
    if (error) {
      setIsFormValid(false);
    }
  }, [errors]);

  useEffect(() => {
    if (takenNames) {
      setName(takenNames);
    }
  }, [takenNames]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormControls({
      ...formControls,
      [event.target.name]: event.target.value,
    });

    const customRules: CustomValidationRules<FormControls> = {
      name: [
        {
          condition: event.target.value.length > 3,
          errorMessage: 'Too long.',
        },
        {
          condition: names.includes(event.target.value),
          errorMessage: 'This name is already taken.',
        },

      ],
      price: [
        {
          condition: event.target.valueAsNumber === 1,
          errorMessage: 'Cannot be equal 1',
        },
      ],
      leafs: [
        {
          condition: event.target.valueAsNumber === 2,
          errorMessage: 'Cannot be equal 2',
        },
      ],
      layers: [
        {
          condition: event.target.valueAsNumber === 3,
          errorMessage: 'Cannot be equal 3',
        },
      ],
      length: [
        {
          condition: event.target.valueAsNumber === 4,
          errorMessage: 'Cannot be equal 4',
        },
      ],
    };

    const inputErrors = validateInput(event.target, customRules);
    setErrors({ ...errors, ...inputErrors });
  };

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormControls({ ...formControls, type: event.target.value as PaperTypes });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormValid) {
      const paper: AddPaperFormControls = {
        name: formControls.name,
        price: Number(formControls.price),
        layers: Number(formControls.layers),
        leafs: Number(formControls.leafs),
        type: formControls.type,
        length: Number(formControls.length),
      };
      dispatch(addPaper(paper));
      setFormControls(initFormControls);
      setErrors(initErrorMessages);
      setIsFormValid(false);
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <Select
          name="type"
          label="Type"
          htmlFor="type"
          onChange={onSelect}
          value={formControls.type}
          horizontal
        >
          {[
            { value: PaperTypes.toilet, children: 'Toilet' },
            { value: PaperTypes.towel, children: 'Towel' },
          ]}
        </Select>

        <Input
          htmlFor="name"
          name="name"
          placeholder="name"
          type="text"
          value={formControls.name}
          onChange={onInputChange}
          label="Name"
          required
          horizontal
          helperText={errors.name ?? undefined}
        />

        <Input
          htmlFor="price"
          name="price"
          placeholder="price"
          type="number"
          value={formControls.price}
          onChange={onInputChange}
          min={0}
          step={0.01}
          label="Price"
          required
          horizontal
          helperText={errors.price ?? undefined}
        />

        <Input
          htmlFor="layers"
          name="layers"
          placeholder="layers"
          type="number"
          value={formControls.layers}
          onChange={onInputChange}
          min={1}
          label="Layers"
          required
          horizontal
          helperText={errors.layers ?? undefined}
        />

        <Input
          htmlFor="leafs"
          name="leafs"
          placeholder="leafs"
          type="number"
          value={formControls.leafs}
          onChange={onInputChange}
          min={1}
          label="Leafs"
          required
          horizontal
          helperText={errors.leafs ?? undefined}
        />

        <Input
          htmlFor="length"
          name="length"
          placeholder="length"
          type="number"
          value={formControls.length}
          onChange={onInputChange}
          min={1}
          label="Length"
          required
          horizontal
          helperText={errors.length ?? undefined}
        />

        <FormButton type="submit" color="primary" horizontal disabled={!isFormValid}>
          Add paper
        </FormButton>
      </form>
    </>
  );
};
