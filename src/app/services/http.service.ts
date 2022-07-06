import { AppConfig } from './../app.config';
import { Category } from './../models';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  url: string;
  body = JSON.stringify('');
  name:any;
  categoryid: any;
  id:any;
  category:any;
  rating:any;
  emmiter : EventEmitter<number> = new EventEmitter();

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
    private configuration: AppConfig,)
    {this.url = this.configuration.apiUrl;
  }
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Category' , this.httpOptions);
  }

  getSellersNames(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Seller' , this.httpOptions);
  }

  getSellerDetail(sellerId?:number,categoryId?:number,rating?:number): Observable<any[]> {
   return this.http.get<any[]>(this.url + 'Seller/' + sellerId + '/' + categoryId + '/' + rating, this.httpOptions);
  }
  getProducts(categoryId?:number,productId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Product/ByCategory/'+ categoryId , this.httpOptions);
    // return this.http.get<any[]>(this.url + 'Product/ByCategory/1' , this.httpOptions);
  }

  getDeals(categoryId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/Deals/' + categoryId, this.httpOptions);
   }
}