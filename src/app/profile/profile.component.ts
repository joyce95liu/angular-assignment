import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  // user = {};
  user: User = new User();
  username;
  password;
  sections = [];

  update(user: User) {
    this.service.updateUser(user);
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  unEnroll(sectionId) {
    this.sectionService
      .unEnrollStudentInSection(sectionId)
      .then(() => {
        this.sectionService
          .findSectionsForStudent()
          .then(sections => this.sections = sections );
      });
  }

  ngOnInit() {
    this.service
      .profile()
      .then(user =>
        this.user = user);
    this.sectionService
      .findSectionsForStudent()
      .then(sections => this.sections = sections );
  }

}
