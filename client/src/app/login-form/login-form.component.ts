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
  username1: String;
  password: String;
  password1: String;
  email: String;
  age: String;
  genre: String; // Hombre, Mujer, Otro, Prefiero-no decirlo
  location = {city: '', country: '', continent: ''};
  isLogin: Boolean;
  error: String;
  continent: String; // nuevo
  countries: Array<any> = [];
  country: String;
  cities: String;
  index: Number;


  constructor(
    public sessionService: SessionService,
    public locationService: LocationService
  ) {}

  ngOnInit() {
    this.isLogin = true;
  }

  login() {
    console.log(this.username1, this.password1);
    this.sessionService.login(this.username1, this.password1).subscribe();
  }

  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email,
      location: this.location,
      genre: this.genre,
      age: this.age,
    };
    console.log(user);
    this.sessionService.signup(user).subscribe();
  }

  getCountries(value) {
    this.location.continent = value;
    this.locationService.getCountries(value).subscribe(c => {
      this.countries = c;
    });
  }

  getCities(i) {
    this.index = Number(i);
    this.location.country = this.countries[i].name;
    this.location.city = this.countries[i].capital;
  }

  showSignup() {
    this.isLogin = !this.isLogin;
  }

}
