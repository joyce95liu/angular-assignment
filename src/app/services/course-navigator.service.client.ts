export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('https://webdev-jiayi.herokuapp.com/api/course')
    .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch('https://webdev-jiayi.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
}
