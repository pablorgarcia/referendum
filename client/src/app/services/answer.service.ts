import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AnswerService {

  constructor(public http: Http) {}

  // Retrive ALL
  getList() {
    return this.http.get(`${environment.BASEURL}/api/answer`)
      .map((res) => res.json());
  }

}
