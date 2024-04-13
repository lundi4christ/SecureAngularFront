import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../services/login.service';
// import {LoginUser} from '../user/loginuser';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  userDetails: any;
  userdata: {};
  constructor(private http: HttpClient, private loginService: LoginService) {
   // http.get('http://localhost:8180/api/auth/resource').subscribe(data => this.userdata = data);
  }

  ngOnInit() {
   this.http.get<any>('http://localhost:8180/api/auth/resource').subscribe(details => this.userDetails = details);
  }

}

