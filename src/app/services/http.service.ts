import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Category } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${env.BASE_URL}/Category`);
  }


}
