import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { PostUser } from '../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  hide = true;
  errorMessage = '';
  registerForm = new FormGroup(
    {
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
      username: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      // hobbies: new FormArray([new FormControl('')]),
    },
    // { updateOn: 'submit' },
  );

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  get controls() {
    return this.registerForm.controls;
  }

  // get hobbies() {
  //   return this.registerForm.get('hobbies') as FormArray;
  // }

  // addControl() {
  //   this.hobbies.push(new FormControl(''));
  // }

  // removeControl(index: number) {
  //   this.hobbies.removeAt(index);
  // }

  onRegister() {
    const userData: PostUser = this.registerForm.getRawValue();
    this.authService.register(userData).subscribe({
      next: () => {
        this.router.navigate(['/logowanie']);
      },
      error: () => {
        this.errorMessage = 'Nie udalo sie zarejestrowac';
      },
    });
    // console.log(this.registerForm.value);
    // console.log(this.registerForm.getRawValue()); // w tym przypadku, nie ma mozliwosci wystapienia undefined, jak kontrolka jest wylaczona to jest ona pusta ale jest zwracana
  }

  ngOnInit(): void {
    // sledzneie zmian w formularzu
    // this.registerForm.controls.email.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    console.log('');
    this.registerForm.controls.email.hasError('required');
    // this.registerForm.controls.email.disable();
    // this.controls.username.addValidators(Validators.minLength(5)); // - to dodaje walidatory
    // this.controls.username.setValidators(Validators.minLength(3)); - to nadpisuje walidatory

    // this.controls.username.setValue('test1');
  }

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

    return control.hasError('email') ? 'Nieprawidlowy adres email' : '';
  }

  // enableControl() {
  //   this.registerForm.controls.email.enable();
  // }
}
