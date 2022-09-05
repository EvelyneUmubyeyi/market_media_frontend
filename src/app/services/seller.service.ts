import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
import { sellerRegistrationForm } from '../model/sellerRegistrationForm';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
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


  httpFormDataOption = {
    headers: new HttpHeaders(
      {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
        'Cache-Control': 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0',
        Pragma: 'no-cache',
        Expires: '0'
      })
  };


  constructor(private http: HttpClient, private configuration: AppConfig) {
    this.url = this.configuration.apiUrl;
  }

  formData: sellerRegistrationForm = new sellerRegistrationForm();

  // sellerRegistration(data: any): Observable<any> {
  //   console.log(data);
  //   return this.http.post<any>(
    
  //     this.url + 'Seller/SellerApplication/WithImage', data,
  //     this.httpOptions
  //   );
  // }

  postFile(formData:FormData): Observable<any> {
    return this.http.post<any>(
      this.url + 'Seller/SellerApplication/WithImage', formData, this.httpFormDataOption
    );
  }

  addStockItem(formData:FormData): Observable<any> {
    return this.http.post<any>(
      this.url + 'Product/AddStockItem', formData, this.httpFormDataOption
    );
  }

  editStockItem(formData:FormData, productSellerId:number): Observable<any> {
    return this.http.put<any>(
      this.url + 'ProductSeller/StockItem/'+ productSellerId, formData, this.httpFormDataOption
    );
  }


  AddPromotion(promotion:any): Observable<any> {
    return this.http.post<any>(
      this.url + 'Promotion', promotion, this.httpFormDataOption
    );
  }

  AddDiscount(discount:any): Observable<any> {
    return this.http.post<any>(
      this.url + 'Discount', discount, this.httpFormDataOption
    );
  }

  ProductInfo(productSellerId:number): Observable<any> {
    return this.http.get<any>(this.url + 'Product/EditStockItem/' + productSellerId, this.httpOptions);
  }

  DeleteProduct(productSellerId:number): Observable<any> {
    return this.http.delete<any>(this.url + 'ProductSeller/' + productSellerId, this.httpOptions);
  }

}


