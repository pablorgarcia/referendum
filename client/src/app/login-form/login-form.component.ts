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
  location = {city: '', country: '', continent: ''};
  isLogin: Boolean = false;
  error: String;
  countries: Array<any> = [];
  country: String;
  cities: String;
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
      email: this.email,
      location: this.location,
    };
    console.log(user);
    this.sessionService.signup(user).subscribe();
  }

  getCountries(value) {
    this.location.continent = value;
    this.locationService.getCountries(value).subscribe(c => {
      this.countries = c;
      /* c.subscribe(d => {
        console.log('------ lll -------');
        console.log(d.capital);
      }); */
    });
  }

  getCities(i) {
    this.index = Number(i);
    this.location.country = this.countries[i].name;
    this.location.city = this.countries[i].capital;
  }

  //element.addEventListener("click", function(){ alert("Hello World!"); });
}
