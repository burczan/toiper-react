import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PaperTypes } from '../../state/papers/types';
import { getTakenNames } from '../../state/papers/selectors';
import { addPaper, AddPaperFormControls } from '../../state/papers/actionCreators';
import {
  validateInput,
  ErrorMessages,
  CustomValidationRules,
} from '../../common/components/Forms/helpers/validation';
import { useFormValidation } from '../../common/components/Forms/helpers/useFormValidation';
import { useTypedSelector } from '../../common/hooks';
import {
  PaperType,
  PaperName,
  PaperPrice,
  PaperLayers,
  PaperLeafs,
  PaperLength,
  SubmitButton,
  FormControls,
} from './FormConfig';

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
  const [formControls, setFormControls] = useState(initFormControls);

  const takenNames = useTypedSelector(getTakenNames);
  const [names, setName] = useState(takenNames);

  const {
    formRef,
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
  } = useFormValidation(initErrorMessages, formControls);

  useEffect(() => {
    if (takenNames) {
      setName(takenNames);
    }
  }, [takenNames]);

  const resetForm = () => {
    setFormControls(initFormControls);
    setErrors(initErrorMessages);
    setIsFormValid(false);
  };

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
      resetForm();
    }
  };

  return (
    <>
      <form ref={formRef} onSubmit={onSubmit} noValidate>
        <PaperType value={formControls.type} onChange={onSelect} />
        <PaperName value={formControls.name} onChange={onInputChange} error={errors.name ?? undefined} />
        <PaperPrice value={formControls.price} onChange={onInputChange} error={errors.price ?? undefined} />
        <PaperLayers value={formControls.layers} onChange={onInputChange} error={errors.layers ?? undefined} />
        <PaperLeafs value={formControls.leafs} onChange={onInputChange} error={errors.leafs ?? undefined} />
        <PaperLength value={formControls.length} onChange={onInputChange} error={errors.length ?? undefined} />

        <SubmitButton text="Add paper" disabled={!isFormValid} />
      </form>
    </>
  );
};
