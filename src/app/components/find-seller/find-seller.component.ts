import { Category } from './../../models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-find-seller',
  templateUrl: './find-seller.component.html',
  styleUrls: ['./find-seller.component.scss']
})
export class FindSellerComponent implements OnInit {

  sellers: any;
  categories: any;
  name: any;
  slrs:any;
  productId=0;
  //categories;
  // sellerId = document.getElementById('example') as HTMLElement;
  @ViewChild('sellerId') sellerId: any; 
  @ViewChild('categoryId') categoryId: any;  
  @ViewChild('rating') rating: any; 
  
  counterRound(i: number) {
    return new Array(Math.floor(i));
  }

  counter(i: number) {
    return new Array(i);
  }

  round(i: number){
    return (Math.ceil(i))
  }
  
  constructor(private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router,
    public nav: NavBarService
    ) {
  }
  ngAfterViewInit(){
    this.getSellerDetail();
  }
  ngOnInit() {
    this.nav.show();
    this.getCategories();  
    this.getSellersNames(); 
  }

  getCategories(){
    this.httpService.getCategories()
      .subscribe((response) => {this.categories = response});
  }

  getSellersNames(){
    this.httpService.getSellersNames()
      .subscribe((response) => {this.slrs = response});
  }

  getSellerDetail(){
    this.route.queryParams
    .subscribe((params:any) =>{
      this.productId = params.data
    })
    if (this.productId>0){
      this.httpService.getSellerDetail(parseInt(this.sellerId.nativeElement.value),parseInt(this.categoryId.nativeElement.value),parseInt(this.rating.nativeElement.value), 
      this.productId)
      .subscribe((xy) => {this.sellers = xy});
    }else{
      this.httpService.getSellerDetail(parseInt(this.sellerId.nativeElement.value),parseInt(this.categoryId.nativeElement.value),parseInt(this.rating.nativeElement.value))
      .subscribe((xy) => {this.sellers = xy});
    }
  }

  setSellerId(sellerId:number): void {
    this.router.navigate(['/sellerDescription'],{queryParams:{data:sellerId}});
  }

}
