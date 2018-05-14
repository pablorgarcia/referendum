import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: Array<any> = [{}];

  constructor(public questionService: QuestionService) {
    this.questionService.getList().subscribe(q => {
      this.questions = q;
      console.log('entra');
      // console.log(this.questions[0]._id);
      console.log(q);
    }
    );
  }

  ngOnInit() {}

}
