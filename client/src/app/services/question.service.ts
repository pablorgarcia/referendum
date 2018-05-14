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
/*
en el map() tengo que devolverlos de mayor a menor Counter
*/

/* Wadaloop: Llamada a la BBDD ordenado por distancia
Product.find({ APIlocation: { $near: { $geometry: { type: "Point", coordinates: [userLoc.long, userLoc.lat] }}} })
    .then(theProduct => {
      res.render("index", { user: req.user, theProduct, userLoc });
    })
    .catch(err => { console.log(err); });
*/

  }

  // Create
  createQuest(fields) {
    return this.http.post(`${environment.BASEURL}/api/question`, {fields})
      .map((res) => res.json());
  }

  // Retrive DETAIL
  getQuestId(id) {
    return this.http.get(`${environment.BASEURL}/api/question/${id}`)
      .map((res) => res.json());
  }

  // Update
  updateQuestId(updates) {
    return this.http.put(`${environment.BASEURL}/api/question/:id`, {updates})
      .map((res) => res.json());
  }

  // Delete
  deleteQuestId(id) {
    return this.http.delete(`${environment.BASEURL}/api/question/${id}`)
      .map((res) => res.json());
  }


  // Retrive DETAIL
  getAnswersByQuest(idQuestion) {
    return this.http.get(`${environment.BASEURL}/api/answer/${idQuestion}`)
      .map((res) => res.json());
  }
}
