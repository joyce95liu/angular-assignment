import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-white-board',
  templateUrl: './white-board.component.html',
  styleUrls: ['./white-board.component.css']
})
export class WhiteBoardComponent implements OnInit {

  constructor(private userservice: UserServiceClient,
              private sectionservice: SectionServiceClient) { }

  user: User = new User();
  sections = [];

  ngOnInit() {
    this.userservice
      .profile()
      .then(user => {
        if ( user !== null ) {
          this.user = user;
        }
        this.sectionservice
          .findSectionsForStudent()
          .then(sections => this.sections = sections );
      });
  }

}
