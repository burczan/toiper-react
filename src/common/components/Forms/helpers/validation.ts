import { typedBoolean } from '../../../utils/types';

export type ErrorMessages<FormControls> = {
  [InputName in keyof FormControls]: string;
};

export type CustomValidationRules<FormControls> = {
  [InputName in keyof FormControls]?: {
    condition: boolean;
    errorMessage: string;
  }[]
};

type AllowedHtmlElements =
  | HTMLButtonElement
  | HTMLInputElement
  | HTMLOutputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type ValidityKey = keyof ValidityState;

const validityKeys: ValidityKey[] = [
  'badInput',
  'patternMismatch',
  'rangeOverflow',
  'rangeUnderflow',
  'stepMismatch',
  'tooLong',
  'tooShort',
  'typeMismatch',
  'valueMissing',
];

export const hasError = <FormControls>(errors: ErrorMessages<FormControls>) => {
  return Object.values(errors).filter(typedBoolean).length > 0;
};

export const validateInput = <FormControls>(
  input: AllowedHtmlElements,
  customValidationRules: CustomValidationRules<FormControls>,
): ErrorMessages<FormControls> => {
  const errorMessages = {} as ErrorMessages<FormControls>;
  const inputName = input.name as keyof FormControls;

  customValidationRules[inputName]?.forEach((rule) => {
    if (rule.condition) {
      errorMessages[inputName] = rule.errorMessage;
      return errorMessages;
    }

    errorMessages[inputName] = '';
    return errorMessages;
  });

  const error = hasError(errorMessages);
  if (error) {
    return errorMessages;
  }

  validityKeys.forEach((key) => {
    if (input.validity[key]) {
      errorMessages[inputName] = input.validationMessage;
    }
  });

  return errorMessages;
};
