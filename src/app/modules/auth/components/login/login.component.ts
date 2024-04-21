import { Component } from '@angular/core';
import { UserLoginData } from '../../../core/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  hide = true;
  userData: UserLoginData = {
    username: '',
    password: '',
  };
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.userData).subscribe({
      next: (user) => {
        console.log(user);
        if (user.length === 0) {
          this.errorMessage = 'Podano nieprawidlowe dane do logowania.';
          return;
        }
      },
      error: () => {
        this.errorMessage = 'Wystąpił błąd podczas logowania.';
      },
    });
  }
}
