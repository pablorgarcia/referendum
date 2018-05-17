import { Component, OnInit } from "@angular/core";
import { SessionService } from "../services/session.service";
import { LocationService } from "../services/location.service";
import { QuestionService } from "../services/question.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  newQuest: String;
  age: String;
  user: any;
  location: Object = { city: '', country: '', continent: '' };
  constructor(
    public sessionService: SessionService,
    public locationService: LocationService,
    public questionService: QuestionService
  ) {}

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(u => {
      console.log(u);
      this.user = u;
      this.location = u.location;
    });
  }

  createQuest() {

    const questData = {
      question: this.newQuest,
      location: this.location,
      author: this.sessionService.user._id,
      age: this.age
    };
    console.log(questData);
    this.questionService.sendQuestToAPI(questData).subscribe();
  }
}
