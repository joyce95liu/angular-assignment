import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/course.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {UserServiceClient} from '../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private sectionService: SectionServiceClient,
              private service: UserServiceClient,
              private router: Router) {
  }

  courses = [];
  sections = [];
  courseId;
  sectionId;
  sectionName;
  seats;


  loadSectionsForCourse(courseId) {
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => this.loadSectionsForCourse(this.courseId));
  }

  createSectionForCourse(sectionName, seats) {
      this.sectionService.createSection(this.courseId, sectionName, seats)
        .then(() => {
          this.loadSectionsForCourse(this.courseId);
        });
    }

  selectSection(section) {
      this.sectionId = section._id;
      this.sectionName = section.name;
      this.seats = section.seats;
  }

  updateSection(sectionId, sectionName, seats) {
    const section = {name: sectionName, seats: seats}
    this.sectionService.updateSection(sectionId, section)
      .then(() => this.loadSectionsForCourse(this.courseId));
  }

  logout() {
    this.service
      .logout()
      .then(() =>
        this.router.navigate(['login']));

  }



  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
