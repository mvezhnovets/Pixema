import { type FormErrors, type FormState } from './form.types';

export function getDefaultFormValues(): FormState {
  return {
    email: '',
    password: ''
  };
}

function isValidEmail(email: FormState['email']): boolean {
  return /^[\w-.+]+@(?<domain>[\w-]+\.)+[\w-]{2,4}$/.test(email);
}

const MIN_PASSWORD_LENGTH = 8;

function isValidPassword(password: FormState['password']): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}

export function getFormErrors(formValues: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!isValidEmail(formValues.email)) {
    errors.email = 'Invalid input format';
  }

  if (isValidPassword(formValues.password)) {
    errors.password = 'Password must contain at least 6 symbols';
  }

  return errors;
}
