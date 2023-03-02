import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static nameAndLastnameValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const result = /^([a-zA-Zа-яёА-ЯЁ]+)$/.test(control.value);
    return result ? null : { nameOrLastName: { value: control.value } };
  }

  static phoneValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^\+?\d{11}$/.test(control.value);
    return result ? null : { password: { value: control.value } };
  }

  static addressValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[A-Za-zА-ЯЁа-яё\d\/\-\s]+$/.test(control.value);
    return result ? null : { address: { value: control.value } };
  }

  static countryValidator(control: AbstractControl): ValidationErrors | null {
    const result = /^[A-Za-zА-ЯЁа-яё]+$/.test(control.value);
    return result ? null : { country: { value: control.value } };
  }
}
