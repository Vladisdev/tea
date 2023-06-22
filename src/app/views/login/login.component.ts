import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/[A-Za-zА-Яа-яЁё]/),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]),
  });

  get name() {
    return this.loginForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }

  login() {
    if (this.name?.value?.trim && this.email?.value?.trim) {
      const isAuthenticated = this.authService.login(
        this.name.value,
        this.email.value
      );

      if (isAuthenticated) {
        this.router.navigate(['main']);
      } else {
        alert('Проверьте введенные вами значения');
      }
    }
  }
}
