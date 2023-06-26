import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PhotoRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;

    if (value && value.photo) {
      return null;
    } else {
      return { photoRequired: true };
    }
  };
}
