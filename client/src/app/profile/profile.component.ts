import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { LocationService } from '../services/location.service';
import { QuestionService } from '../services/question.service';
import { ESRCH } from 'constants';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  newQuest: String;
  location: Object = {city: '', country: '', continent: ''};
  age: String;

  constructor(
    public sessionService: SessionService,
    public locationService: LocationService,
    public questionService: QuestionService
  ) {}

  ngOnInit() {
    this.location = this.sessionService.user.location;
    console.log(this.sessionService.user);
  }

  createQuest() {
  // aqui salto al servicio

    const questData = {
      question: this.newQuest,
      location: this.location,
      author: this.sessionService.user._id
    };
    console.log(questData);
    this.questionService.createQuest(questData).subscribe();
  }

}
