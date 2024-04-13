import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';
// import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentUser = {};
  constructor(private loginService: LoginService, private router: Router, private userService: UsersService) { }
  backgroundImage = 'assets/mylogin.jpg';
  credentials = {
    usernameOrEmail: '',
    password: ''
  };

  ngOnInit(): void {
    window.localStorage.removeItem('token');
  }

  // tslint:disable-next-line:typedef
  login(){
    this.loginService.loginUser(this.credentials).subscribe(
      response => {
          window.localStorage.setItem('token', response.result.token);
          window.localStorage.getItem('token');
          this.currentUser = response;
          // this.userService.setUser(response.user)
          this.router.navigate(['/home']);
      },
      /*error => {
      this.error = 'Invalid username or password';
      }*/
    );
  }

 /*isLoggedIn() {
    const token = localStorage.getItem('access_token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }*/

}
