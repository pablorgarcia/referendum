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
  endDate: String;
  user: any;
  location: Object;

  constructor(
    public sessionService: SessionService,
    public locationService: LocationService,
    public questionService: QuestionService
  ) {}

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(u => {
      this.user = u;
      this.location = u.location;
    });
  }

  createQuest() {

    const questData = {
      question: this.newQuest,
      author: this.user._id,
      endDate: this.endDate,
      location: this.location,
    };
    this.questionService.sendQuestToAPI(questData).subscribe();
  }
}
