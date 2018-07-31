export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('https://webdev-jiayi.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
