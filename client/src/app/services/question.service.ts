import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

/*
El servicio nos devolverá la respuesta ya filtrada al componente.
"solo el .value", no todo el json de respuesta
*/

@Injectable()
export class QuestionService {

  constructor(public http: Http) {}

  // Retrive ALL
  getList() {
    return this.http.get(`${environment.BASEURL}/api/question`)
      .map((res) => res.json());
  }

  getListbyLocation(location) {
    return this.http.get(`${environment.BASEURL}/api/question/${location}`)
      .map((res) => res.json());
  }

  // Create
  sendQuestToAPI(fields) {
    return this.http.post(`${environment.BASEURL}/api/question`, fields)
      .map((res) => res.json());
  }

  // Retrive DETAIL
  getQuestId(id) {
    return this.http.get(`${environment.BASEURL}/api/question/${id}`)
      .map((res) => res.json());
  }

  // Update
  updateQuestId(updates) {
    return this.http.put(`${environment.BASEURL}/api/question/${updates._id}`, updates)
      .map((res) => res.json());
  }

  // Delete
  deleteQuestId(id) {
    return this.http.delete(`${environment.BASEURL}/api/question/${id}`)
      .map((res) => res.json());
  }

}
