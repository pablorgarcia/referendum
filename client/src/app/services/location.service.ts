import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LocationService {

  constructor(public http: Http) {}

  getCountries(continentSelected) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${continentSelected}`)
      .map((res) => res.json());
  }

}
