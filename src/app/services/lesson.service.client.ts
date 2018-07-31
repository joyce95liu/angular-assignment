export class LessonServiceClient {
  findLessonsForModule(moduleId) {
    return fetch('https://webdev-jiayi.herokuapp.com/api/module/' + moduleId + '/lesson')
      .then( response => response.json());
  }
}
