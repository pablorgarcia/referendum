import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LocationService {

  constructor(public http: Http) {}

  getCountries(value) {
    return this.http.get(`${environment.BASEURL}/api/location/${value}`)
    .map((res) => res.json());
  }

}
