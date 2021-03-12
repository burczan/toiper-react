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
  const inputName = input.name as keyof FormControls;
  const errorMessages = { [inputName]: '' } as ErrorMessages<FormControls>;

  customValidationRules[inputName]?.some((rule) => {
    if (rule.condition) {
      errorMessages[inputName] = rule.errorMessage;
      return true;
    }
    return false;
  });

  if (hasError(errorMessages)) {
    return errorMessages;
  }

  validityKeys.some((key) => {
    if (input.validity[key]) {
      errorMessages[inputName] = input.validationMessage;
      return true;
    }
    return false;
  });

  return errorMessages;
};
