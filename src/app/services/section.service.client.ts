export class SectionServiceClient {

  // SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';
  SECTION_URL = 'https://morning-retreat-66910.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'https://blooming-sea-46285.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'https://blooming-sea-46285.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch('https://blooming-sea-46285.herokuapp.com/api/section/' + sectionId, {
      method: 'delete',
      // credentials: 'include'
    })
      .then(response => response.json());
  }

  updateSection(sectionId, section) {
    return fetch('https://blooming-sea-46285.herokuapp.com/api/section/' + sectionId, {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  unEnrollStudentInSection(sectionId) {
    const url = 'https://blooming-sea-46285.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }
}
