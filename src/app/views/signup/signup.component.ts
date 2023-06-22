import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signupForm = new FormGroup({
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
    return this.signupForm.get('name');
  }

  get email() {
    return this.signupForm.get('email');
  }

  signup() {
    if (this.name?.value?.trim && this.email?.value?.trim) {
      this.authService.signup(this.name.value, this.email.value);

      this.router.navigate(['main']);
    }
  }
}
