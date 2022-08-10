import { SignInData } from './../model/signInData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;
  body = JSON.stringify('');
  isAuthenticated=false;
  response:any;
  emmiter: EventEmitter<number> = new EventEmitter();

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json;', 'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        Accept: 'q=0.8;application/json;q=0.9',
        'Access-Control-Max-Age': '600',
        'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        Pragma: 'no-cache',
        Expires: '0'
      }
    )
  };
  constructor(
    private http: HttpClient,
    private configuration: AppConfig,
    private router: Router) {
    this.url = this.configuration.apiUrl;
  }

  authenticate(signInData:any): boolean {
    this.checkCredentials(signInData)
    .subscribe(xy => {console.log(xy)});
    if ( this.checkCredentials(signInData) && (String(this.checkCredentials(signInData)) != 'User not found')) {
      this.isAuthenticated = true;
      this.router.navigate([''])
      return true;
    }
    this.isAuthenticated = false;
    return false; 
  }

  private checkCredentials(signInData: any){
    return this.http.post<any>(
      this.url + 'api/Login', JSON.stringify(signInData),
      this.httpOptions); 
  }

  logout() {
    this.isAuthenticated = false;
    this.router.navigate(['login']);
  }
}
