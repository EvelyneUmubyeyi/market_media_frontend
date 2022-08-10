import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  post(arg0: string, credentials: { Emailaddress: any; password: any; }) {
    throw new Error('Method not implemented.');
  }

  url: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
      Accept: 'q=0.8;application/json;q=0.9',
      'Access-Control-Max-Age': '600',
      'Cache-Control':
        'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
      Pragma: 'no-cache',
      Expires: '0',
    }),
  };
  constructor(private http: HttpClient,
    private configuration: AppConfig) {
    this.url = this.configuration.apiUrl;
  }

  signIn(data: any): Observable<any> {
    return this.http.post<any>(
      this.url + 'LoginInfo', JSON.stringify(data),
      this.httpOptions
    );
  }
}