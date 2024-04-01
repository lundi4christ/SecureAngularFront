import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }
  backgroundImage = 'assets/mylogin.jpg';
  credentials = {
    usernameOrEmail: '',
    password: ''
  };

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login(){
    this.loginService.loginUser(this.credentials).subscribe(
    response => {
      this.router.navigate(['/home']);
    },
      /*error => {
      this.error = 'Invalid username or password';
      }*/
    );
  }

}
