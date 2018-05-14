import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  username: String;
  lastname: String;
  password: String;
  email: String;
  age: String;
  genre: String; // Hombre, Mujer, Otro, Prefiero-no decirlo
  location: String;
  isLogin: Boolean = false;
  error: String;

  constructor(public sessionService: SessionService) {}

  ngOnInit() {
    if (this.sessionService.user) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

  login() {
    console.log(this.username, this.password);
    this.sessionService.login(this.username, this.password).subscribe();
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    console.log(user);
    this.sessionService.signup(user).subscribe();
  }
}
