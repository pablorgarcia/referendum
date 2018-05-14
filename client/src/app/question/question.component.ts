import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { SessionService } from '../services/session.service';
import { QuestionService } from '../services/question.service';
import { AnswerService } from '../services/answer.service';

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
  user: any;
  questionId: any;
  question: any = {};
  answer: any = [];

  constructor(
    public http: Http,
    public route: ActivatedRoute,
    public sessionService: SessionService,
    public questionService: QuestionService,
    private answerService: AnswerService
  ) {
    this.route.params.subscribe(params => {
      // console.log(params.id);
      this.questionService.getQuestId(params.id).subscribe(q => this.question = q);
      this.questionId = params.id;
      this.questionService.getAnswersByQuest(params.id).subscribe(a => this.answer = a);
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


