import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
  public $isLogged: Subject<boolean> = new Subject<boolean>();

  private isLogged: boolean = false;

  signup(name: string, email: string) {
    this.isLogged = true;
    this.$isLogged.next(this.isLogged);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }

  login(name?: string, email?: string) {
    if (name && email) {
      const userName = localStorage.getItem('name');
      const userEmail = localStorage.getItem('email');
      if (name === userName && email === userEmail) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }

      this.$isLogged.next(this.isLogged);

      return this.isLogged;
    }

    this.isLogged = true;
    this.$isLogged.next(this.isLogged);

    return this.isLogged;
  }

  logout() {
    this.isLogged = false;
    this.$isLogged.next(this.isLogged);
  }

  isLoggedIn() {
    return this.isLogged;
  }
}
