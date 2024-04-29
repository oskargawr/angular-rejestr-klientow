import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  constructor() {}

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Musisz wpisac jakas wartosc';
    }

    if (control.hasError('minlength')) {
      return 'Wpisales za malo znakow';
    }

    if (control.hasError('maxlength')) {
      return 'Wpisales za duzo znakow';
    }

    if (control.hasError('invalidPostcode')) {
      return 'Nieprawidlowy kod pocztowy';
    }
    return control.hasError('email') ? 'Nieprawidlowy adres email' : '';
  }
}
