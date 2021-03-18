import { useEffect, useRef, useState } from 'react';
import { hasError } from './validation';
import { SetState, Ref } from '../../types';

type ValidationConfig<ErrorMessages> = {
  formRef: Ref<HTMLFormElement>;
  isFormValid: boolean;
  setIsFormValid: SetState<boolean>;
  errors: ErrorMessages;
  setErrors: SetState<ErrorMessages>;
};

export const useFormValidation = <ErrorMessages, FormControls>(
  initErrorMessages: ErrorMessages,
  formControls: FormControls,
): ValidationConfig<ErrorMessages> => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState(initErrorMessages);

  useEffect(() => {
    if (formRef.current?.checkValidity()) {
      setIsFormValid(true);
    }
  }, [formControls]);

  useEffect(() => {
    if (hasError(errors)) {
      setIsFormValid(false);
    }
  }, [errors]);

  return {
    formRef,
    isFormValid,
    setIsFormValid,
    errors,
    setErrors,
  };
};
