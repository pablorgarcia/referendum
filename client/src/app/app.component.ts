import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question.service';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questions: Array<any> = [];

  constructor(
    public sessionService: SessionService,
    public questionService: QuestionService,
    public router: Router) {
    if (!this.sessionService.user) {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.questionService.getList().subscribe(q => this.questions = q);
  }
}
