import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userLocation = { city: '', country: '', continent: '' };
  questions: Array<any> = [{}];
  questionsByLocation: Array<any> = [{}];

  constructor(
    public sessionService: SessionService,
    public questionService: QuestionService
  ) {
    this.questionService.getList().subscribe(q => {
      this.questions = q;
    });
  }

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(u => {
      this.userLocation = u.location;
    });
  }

  getLocation(value) {
    this.questionService.getListbyLocation(value).subscribe(q => {
      console.log(q)
      this.questionsByLocation = q;
    });
  }

}
