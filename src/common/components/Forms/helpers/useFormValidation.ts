import React, { useEffect, useRef, useState } from 'react';
import { hasError } from './validation';

type ValidationConfig = {
  formRef: React.RefObject<HTMLFormElement>,
  isFormValid: boolean,
  setIsFormValid: React.Dispatch<React.SetStateAction<boolean>>,
};

export const useFormValidation = <Errors, FormControls>(
  errors: Errors,
  formControls: FormControls,
): ValidationConfig => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isFormValid, setIsFormValid] = useState(false);

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

  return { formRef, isFormValid, setIsFormValid };
};
