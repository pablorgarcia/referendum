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
  public doughnutChartData: number[] = [0, 0, 0];
  public doughnutChartType: String = 'doughnut';
  user: any;
  questionId: any;
  question: any = {};
  answers: any = [];
  voted: Boolean = false;


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
    if (this.voted = false) {
      this.question.counter++;
      this.answerService.createVote(this.questionId, option, this.sessionService.user._id).subscribe();
      this.questionService.updateQuestId(this.question).subscribe(() => {
        this.answerService.getAnswersByQuest(this.questionId).subscribe(a => {
          this.answers = a;
          this.numAnswer(this.answers);
        });
      });
      this.voted = true;
    } else {
      // mandamos un mensaje de "ya has votado"
    }
  }

  public numAnswer(answers) {
    this.doughnutChartData = [];
    const options = ['yes', 'no', 'dont know'];
      const yes = answers.reduce(function (n, valorActual) {
        return n + (valorActual.answer === 'yes');
      }, 0);
      this.doughnutChartData.push(yes);
      const no = answers.reduce(function (n, valorActual) {
        return n + (valorActual.answer === 'no');
      }, 0);
      this.doughnutChartData.push(no);
      const dknow = answers.reduce(function (n, valorActual) {
        return n + (valorActual.answer === 'dont know');
      }, 0);
      this.doughnutChartData.push(dknow);
      console.log(this.doughnutChartData);

  }

}
