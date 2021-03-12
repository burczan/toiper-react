type ValidationStatus = {
  [inputName: string]: {
    validationMessage: string,
    validity: ValidityState,
  };
};

type Output = {
  inputs: ValidationStatus;
  allFieldsValid: boolean;
};

export const validateForm = (form: HTMLFormElement): Output => {
  const formData = new FormData(form);
  const validationStatus = Array
    .from(formData.keys())
    .reduce((prev, inputName) => {
      const el = form.elements.namedItem(inputName) as HTMLObjectElement;
      return {
        ...prev,
        [inputName]: {
          validationMessage: el.validationMessage,
          validity: el.validity,
        },
      };
    }, {} as ValidationStatus);

  return { inputs: validationStatus, allFieldsValid: form.checkValidity() };
};

export type ErrorMessages<FormControls> = {
  [InputName in keyof FormControls]: string;
};

export const setRequiredErrorMsgOnSubmit = <FormControls>(
  form: HTMLFormElement,
  message: string,
): ErrorMessages<FormControls> => {
  const formData = new FormData(form);
  const errorMessages = Array
    .from(formData.keys())
    .reduce((prev, inputName) => {
      const el = form.elements.namedItem(inputName) as HTMLObjectElement;
      if (el.validity.valueMissing) {
        return {
          ...prev,
          [el.name]: message,
        };
      }

      return prev;
    }, {} as ErrorMessages<FormControls>);

  return errorMessages;
};

// export const setRequiredErrorMsgOnSubmit = <ErrorMessages, FieldsErrors>(
//   form: HTMLFormElement,
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   fieldErrors: any, // FieldsErrors,
// ): ErrorMessages => {
//   const formData = new FormData(form);
//   const errorMessages = Array
//     .from(formData.keys())
//     .reduce((prev, inputName) => {
//       const el = form.elements.namedItem(inputName) as HTMLObjectElement;
//       if (el.validity.valueMissing) {
//         return {
//           ...prev,
//           [el.name]: fieldErrors.common.required,
//         };
//       }

//       return prev;
//     }, {} as ErrorMessages);

//   return errorMessages;
// };
