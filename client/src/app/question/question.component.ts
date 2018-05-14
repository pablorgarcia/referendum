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
  public doughnutChartData: number[] = [];
  public doughnutChartType: String = 'doughnut';
  user: any;
  questionId: any;
  question: any = {};
  answers: any = [];


  constructor(
    public http: Http,
    public route: ActivatedRoute,
    public sessionService: SessionService,
    public questionService: QuestionService,
    private answerService: AnswerService
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
  public submitVote(option: string) {
    this.question.counter++;
    this.answerService.createVote(this.questionId, option, this.sessionService.user).subscribe();
    this.questionService.updateQuestId(this.question);
    this.questionService.getAnswersByQuest(this.questionId).subscribe(a => this.answers = a);
    this.numAnswer(this.answers);
  }

  public numAnswer(answers) {
    const options = ['yes', 'no', 'dont know'];
    options.forEach(opt => {
      this.doughnutChartData.push(answers.reduce(function (n, valorActual) {
        return n + (valorActual.answer === opt);
      }, 0));
    });
  }

}
