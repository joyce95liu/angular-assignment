import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  login(username, password) {
    console.log([username, password]);
    this.service
      .login(username, password)
      .then((response) => {
        if (response.status !== 404) {
          alert('Login Successful');
        this.router.navigate(['profile']);
        } else {
        alert('The username or password is incorrect');
        }
      });
  }

  constructor(private router: Router,
              private service: UserServiceClient) { }

  ngOnInit() {
  }

}
