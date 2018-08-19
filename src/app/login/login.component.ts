import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {HttpProvider} from '../http.provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  result = '';
  constructor(private auth: AuthService, private httpProvider: HttpProvider) { }

  ngOnInit() {
  }

  onLogin(){
    this.httpProvider.registration(this.email,this.password);
    this.auth.changeAuth();
  }

}
