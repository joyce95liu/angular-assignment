export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://morning-retreat-66910.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      username: username,
      password: password
    };
    return fetch('https://morning-retreat-66910.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  logout() {
    return fetch('https://morning-retreat-66910.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://morning-retreat-66910.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://morning-retreat-66910.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateUser(user) {
    return fetch('https://morning-retreat-66910.herokuapp.com/api/profile', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  // findUserByName(username) {
  //   const user = {
  //     username: username
  //   };
  //   return fetch('http://localhost:4000/api/username', {
  //     method: 'post',
  //     body: JSON.stringify(user),
  //     credentials: 'include',
  //     headers: {
  //       'content-type': 'application/json'
  //     }
  //   });
  // }

  register(username , password) {
      const user = {
        username: username,
        password: password
      };
      return fetch('https://morning-retreat-66910.herokuapp.com/api/register', {
        method: 'post',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
    }

}
