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
  categoryId: any;
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

  getMainCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Category/MainCategories' , this.httpOptions);
  }

  getSubCategories(parentCategoryId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Category/SubCategories/'+parentCategoryId , this.httpOptions);
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Category' , this.httpOptions);
  }

  getSellersNames(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Seller' , this.httpOptions);
  }

  getSellersOfProduct(productId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/ByProduct/'+productId , this.httpOptions);
  }

  getSellerDetail(sellerId?:number,categoryId?:number,rating?:number,productId:number=0): Observable<any[]> {
   return this.http.get<any[]>(this.url + 'Seller/' + sellerId + '/' + categoryId + '/' + rating + '/' + productId, this.httpOptions);
  }

  getSellerDetails(sellerId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Seller/sellerDetails/' + sellerId, this.httpOptions);
   }

  getProducts(categoryId?:number,productId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Product/ByCategory/'+ categoryId , this.httpOptions);
  }

  getDeals(categoryId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/Deals/' + categoryId, this.httpOptions);
  }

  getProductSellers(productId?:number, sellerId?:number, rating?:number ): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/SellersOfProduct/' + productId + '/' + sellerId + '/' + rating, this.httpOptions);
  }
  getProductsFilter(sellerId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/BySeller/' + sellerId, this.httpOptions);
  }

  
  getProductsBySeller(productId?:number, sellerId?:number, categoryId?:number,rating?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/BySeller/' + productId + '/' + sellerId+ '/' + categoryId + '/' + rating, this.httpOptions);
  }

  getSellerProducts(productId?:number, sellerId?:number, categoryId?:number,rating?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'ProductSeller/SellerStock/0/1/0/0', this.httpOptions);
  }

  searchProduct(productId?:number,categoryId?:number,rating?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Product/SearchProduct/' + productId + '/' + categoryId + '/' + rating, this.httpOptions);
  }

  setCategoryId(categoryId:number):void{
    this.categoryId = categoryId;
  }

  getCategoryId():number{
    return(this.categoryId);
  }
  getProductDetails(productId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Product/ProductDetails/' + productId, this.httpOptions);
  }

  getCustomerProfile(customerId?:number): Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'CustomerProfile/' + customerId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'CustomerProfile/1', this.httpOptions);
  }

  getAccountSettings(customerId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'LoginInfo/1', this.httpOptions);
  }

  getCartItems(customerId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Cart/1', this.httpOptions);
  }

  getCustomerOrders(customerId?:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'Order/ByCustomer/1', this.httpOptions);
  }
  
  getSellersApplications(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'SellersApplications', this.httpOptions);
  }

  getSellerApplication(sellerId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'SellerRegistration/'+sellerId, this.httpOptions);
  }

  getSellerBranches(sellerId:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'SellerBranches/'+sellerId, this.httpOptions);
  }

  getSellerProductsAdmin(productId:number, sellerId:number, categoryId:number, avg_rating:number): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'SellerProductsAdmin/'+productId+ '/' +sellerId+ '/' +categoryId+ '/' +avg_rating, this.httpOptions);
  }
 
  getSellerOrders(sellerId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'SellerOrders/'+sellerId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'SellerOrders/1', this.httpOptions);
  } 

  getSellerReviews(sellerId?:number, productId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'Review/'+sellerId+'/'+productId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'Review/1/0', this.httpOptions);
  } 

  getSellerRating(sellerId?:number, productId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'SellerRating/'+sellerId+'/'+productId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'SellerRating/1/0', this.httpOptions);
  } 

  getSellerProfile(sellerId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'SellerProfile/'+sellerId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'SellerProfile/1', this.httpOptions);
  } 

  getSellerStats(sellerId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'DashboardStats/'+sellerId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'DashboardStats/1', this.httpOptions);
  } 

  getSellerCategories(sellerId?:number):Observable<any[]> {
    // return this.http.get<any[]>(this.url + 'SellerCategories/'+sellerId, this.httpOptions);
    return this.http.get<any[]>(this.url + 'SellerCategories/1', this.httpOptions);
  } 

  getProvinces():Observable<any[]> {
    return this.http.get<any[]>(this.url+'Province', this.httpOptions);
  }

  getDistricts(provinceId:number):Observable<any[]> {
    return this.http.get<any[]>(this.url+'District/ByProvince/'+provinceId, this.httpOptions);
  }

  getSectors(districtId:number):Observable<any[]> {
    return this.http.get<any[]>(this.url+'Sector/ByDistrict/'+districtId, this.httpOptions);
  }

  getCells(sectorId:number):Observable<any[]> {
    return this.http.get<any[]>(this.url+'Cell/BySector/'+sectorId, this.httpOptions);
  }

  getVillages(cellId:number):Observable<any[]> {
    return this.http.get<any[]>(this.url+'Village/ByCell/'+cellId, this.httpOptions);
  }

  getProductsInCategory(categoryId:number):Observable<any[]> {
    return this.http.get<any[]>(this.url+'Product/InCategory/'+categoryId, this.httpOptions);
  }

  getManufacturers():Observable<any[]> {
    return this.http.get<any[]>(this.url+'Manufacturer', this.httpOptions);
  }
  
}