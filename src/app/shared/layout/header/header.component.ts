import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.$isLogged.subscribe((isLoggedIn: boolean) => {
      this.isLogged = isLoggedIn;
      console.log(`login state is: ${this.isLogged}`);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
