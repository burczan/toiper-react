import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPaper, AddPaperFormControls } from '../../state/papers/actionCreators';
import { PaperTypes } from '../../state/papers/types';
import { FormButton, Input, Select } from '../../common/components/Forms';
import {
  validateForm,
  setRequiredErrorMsgOnSubmit,
  ErrorMessages,
} from '../../common/components/Forms/helpers/validation';
import { getTakenNames } from '../../state/papers/selectors';
import { useTypedSelector } from '../../common/hooks';

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

const fieldErrors = {
  common: {
    required: 'This field is required',
  },
  name: 'Name is already taken',
};

export const AddPaperForm = () => {
  const dispatch = useDispatch();
  const formRef = useRef<HTMLFormElement>(null);
  const [formControls, setFormControls] = useState(initFormControls);
  const [errors, setErrors] = useState(initErrorMessages);
  const [isFormValid, setIsFormValid] = useState(false);
  const takenNames = useTypedSelector(getTakenNames);

  useEffect(() => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        setIsFormValid(true);
      }
    }
  }, [formControls]);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormControls({
      ...formControls,
      [event.target.name]: event.target.value,
    });

    switch (event.target.name) {
      case 'name': {
        if (takenNames.includes(event.target.value)) {
          setErrors({ ...errors, name: fieldErrors.name });
        } else {
          setErrors({ ...errors, name: '' });
        }
        break;
      }
      case 'price': {
        if (event.target.validity.valueMissing) {
          setErrors({ ...errors, price: fieldErrors.common.required });
        } else {
          setErrors({ ...errors, price: '' });
        }
        break;
      }
      case 'leafs': {
        if (event.target.validity.valueMissing) {
          setErrors({ ...errors, leafs: fieldErrors.common.required });
        } else {
          setErrors({ ...errors, leafs: '' });
        }
        break;
      }
      case 'layers': {
        if (event.target.validity.valueMissing) {
          setErrors({ ...errors, layers: fieldErrors.common.required });
        } else {
          setErrors({ ...errors, layers: '' });
        }
        break;
      }
      case 'length': {
        if (event.target.validity.valueMissing) {
          setErrors({ ...errors, length: fieldErrors.common.required });
        } else {
          setErrors({ ...errors, length: '' });
        }
        break;
      }
    }
  };

  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormControls({ ...formControls, type: event.target.value as PaperTypes });
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    const errorMessages = setRequiredErrorMsgOnSubmit<FormControls>(form, fieldErrors.common.required);
    setErrors(errorMessages);

    // const { inputs, allFieldsValid } = validateForm(event.target as HTMLFormElement);
    const allFieldsValid = form.checkValidity();
    setIsFormValid(allFieldsValid);

    if (allFieldsValid) {
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
          helperText={errors.name ? errors.name : undefined}
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
          helperText={errors.price ? errors.price : undefined}
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
          helperText={errors.layers ? errors.layers : undefined}
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
          helperText={errors.leafs ? errors.leafs : undefined}
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
          helperText={errors.length ? errors.length : undefined}
        />

        <FormButton type="submit" color="primary" horizontal disabled={!isFormValid}>
          Add paper
        </FormButton>
      </form>
    </>
  );
};
