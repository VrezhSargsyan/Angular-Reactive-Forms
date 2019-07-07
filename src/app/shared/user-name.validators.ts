import { AbstractControl, ValidatorFn } from '@angular/forms';

export const forbiddenNameValidator = (forbiddenNaem: RegExp): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenNaem.test(control.value);
    return forbidden ? { ['forbiddenName']: { value: control.value } } : null;
  };
};
