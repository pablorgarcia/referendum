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

  createVote(question, answer, user) {
    return this.http.post(`${environment.BASEURL}/api/answer`, {question, answer, user})
      .map((res) => res.json());
  }

  getAnswer(id) {
    return this.http.get(`${environment.BASEURL}/api/answer/${id}`)
      .map((res) => res.json());
  }

  // Retrive DETAIL
  getAnswersByQuest(idQuestion) {
    return this.http.get(`${environment.BASEURL}/api/answer/${idQuestion}`)
      .map((res) => res.json());
  }

}
