import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { AnswerService } from '../services/answer.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // Doughnut chart.js - https://valor-software.com/ng2-charts
  public doughnutChartLabels: Array<String> = ['Yes', 'No', 'Don\'t know'];
  public doughnutChartData: number[] = [350, 450, 100]; // aqui traemos los datos del SI, NO, NO CONTESTA
  public doughnutChartType: String = 'doughnut';
  questionId: any;
  question: any;
  user: any;


//  question = 'aqui tengo que traerme el json que viene de BBDD';

  constructor(
    public http: Http,
    private answerService: AnswerService,
    public route: ActivatedRoute,
    public questionService: QuestionService,
    public sessionService: SessionService
  ) {
    this.route.params.subscribe(params => {
      this.questionService.getQuestId(params.id).subscribe(q => this.question = q);
      this.questionId = params.id;
    });
  }

  ngOnInit() {
    this.user = this.sessionService.user;
  }


  // events chart
  public chartClicked(e: any): void {
    console.log(e);
  }

  // events chart
  public chartHovered(e: any): void {
    console.log(e);
  }

  // crear el create vote en el servicio
  submitVote(option: string) {
    this.question.counter++;
    this.answerService.createVote(this.questionId, option, this.user._id).subscribe();
    this.questionService.updateQuestId(this.question);

  }
}


