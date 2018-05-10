import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

//  question = 'aqui tengo que traerme el json que viene de BBDD';

  constructor(public http: Http) {}

  ngOnInit() {}

}
