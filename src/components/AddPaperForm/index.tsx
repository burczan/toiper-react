import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { PaperTypes } from '../../state/papers/types';
import { getTakenNames } from '../../state/papers/selectors';
import { addPaper, AddPaperFormControls } from '../../state/papers/actionCreators';
import { validateInput } from '../../common/helpers/form/validation';
import { useTypedSelector, useFormValidation } from '../../common/hooks';
import {
  PaperType,
  PaperName,
  PaperPrice,
  PaperLayers,
  PaperLeafs,
  PaperLength,
  SubmitButton,
  initFormControls,
  initErrorMessages,
  customRules,
} from './FormConfig';

export const AddPaperForm = () => {
  const dispatch = useDispatch();
  const [formControls, setFormControls] = useState(initFormControls);

  const takenNames = useTypedSelector(getTakenNames);
  const [invalidNames, setInvalidName] = useState(takenNames);

  const {
    formRef,
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
  } = useFormValidation(initErrorMessages, formControls);

  useEffect(() => {
    if (takenNames) {
      setInvalidName(takenNames);
    }
  }, [takenNames]);

  const resetForm = () => {
    setFormControls(initFormControls);
    setErrors(initErrorMessages);
    setIsFormValid(false);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormControls({ ...formControls, [event.target.name]: event.target.value });
    const rules = customRules(event.target, invalidNames);
    const inputErrors = validateInput(event.target, rules);
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
        <PaperName
          value={formControls.name}
          onChange={onInputChange}
          error={errors.name ?? undefined}
        />
        <PaperPrice
          value={formControls.price}
          onChange={onInputChange}
          error={errors.price ?? undefined}
        />
        <PaperLayers
          value={formControls.layers}
          onChange={onInputChange}
          error={errors.layers ?? undefined}
        />
        <PaperLeafs
          value={formControls.leafs}
          onChange={onInputChange}
          error={errors.leafs ?? undefined}
        />
        <PaperLength
          value={formControls.length}
          onChange={onInputChange}
          error={errors.length ?? undefined}
        />

        <SubmitButton text="Add paper" disabled={!isFormValid} />
      </form>
    </>
  );
};
