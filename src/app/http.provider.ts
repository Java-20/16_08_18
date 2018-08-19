import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TokenModel} from './token.model';

@Injectable()
export class HttpProvider {
  BASE_URL: string = 'https://telranstudentsproject.appspot.com/_ah/api/contactsApi/v1';
  headers: HttpHeaders = new HttpHeaders({
    'Authorization':'token'
  });
  constructor(private httpClient:HttpClient){}

  public registration(email: string, password: string){
    let body = {
      email: email,
      password: password
    };
    this.httpClient.post<TokenModel>(this.BASE_URL +'/registration',body,{
      headers:this.headers
    })
      .subscribe(
        (value: TokenModel) => {
          localStorage.setItem('token',value.token);
          console.log(value.token);
        },
        err=>{console.log(err)}
        );
  }
}
