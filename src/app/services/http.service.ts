import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Category,Seller } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${env.BASE_URL}/Category`);
  }

  getSellers(
    location?:string,
    category?:string,
    seller_name?:string,
    avg_rating?:number
  ): Observable<Seller[]>{
      let params = new HttpParams();

      if (location) {
        params = new HttpParams().set('location', location);
      }

      if (category) {
        params = new HttpParams().set('category', category);
      }

      if (seller_name) {
        params = new HttpParams().set('seller_name', seller_name);
      }

      if (avg_rating) {
        params = new HttpParams().set('avg_rating', avg_rating);
      }

      return this.http.get<Seller[]>(`${env.BASE_URL}/seller`, {
        params: params,
      });
  }


}
