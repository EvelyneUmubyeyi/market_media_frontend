import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  url: string;
  visible!: boolean;
  body = JSON.stringify('');
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
    this.visible = true;
    this.url = this.configuration.apiUrl;
  }
  hide() { this.visible = false; }

  show() { this.visible = true; }
}
