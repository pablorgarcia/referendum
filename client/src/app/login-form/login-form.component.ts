import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { LocationService } from '../services/location.service';

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
  countries: Array<any> = [];
  country: String;
  index: Number;

  constructor(
    public sessionService: SessionService,
    public locationService: LocationService
  ) {}

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

  showCountries() { // showDataLocation()
    // aqui manejamos los countries/cities del json que nos devuelve el servicio location
    // y pintamos en el <select option> del login
  }
  getCountries(value) {
    this.locationService.getCountries(value).subscribe(c => {
      console.log(c);
      this.countries = c;
    });
  }

  getCities(i) {
    console.log(i)
    this.index = Number(i);
  }
}
