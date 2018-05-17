import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: String;

  constructor(public sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.isLoggedIn().subscribe(u => {
      this.username = u.username;
    });
  }

}
