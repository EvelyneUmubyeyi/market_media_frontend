import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-sellers',
  templateUrl: './product-sellers.component.html',
  styleUrls: ['./product-sellers.component.scss']
})
export class ProductSellersComponent implements OnInit {

  sellers: any;
  categories: any;
  name: any;
  slrs:any;
  productId=0;
  
  @ViewChild('sellerId') sellerId: any; 
  @ViewChild('rating') rating: any; 
  
  counter(i: number) {
    return new Array(i);
}

  constructor(private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
    ) {
  }
  ngAfterViewInit(){
    this.getProductSellers();
  }
  ngOnInit() {
    this.getCategories();  
    this.route.queryParams
    .subscribe((params:any) =>{
      this.productId = params.data
    })
    this.getSellersNames(); 
  }

  getCategories(){
    this.httpService.getCategories()
      .subscribe((response) => {this.categories = response});
  }

  getSellersNames(){
    this.httpService.getSellersOfProduct(this.productId)
      .subscribe((response) => {this.slrs = response});
  }

  setSellerId(sellerId:number): void {
    this.router.navigate(['/sellerDescription'],{queryParams:{data:sellerId}});
  }

  getProductSellers(){
      this.httpService.getProductSellers(this.productId, parseInt(this.sellerId.nativeElement.value),parseInt(this.rating.nativeElement.value))
      .subscribe((xy) => {this.sellers=xy});
      // console.log(this.sellers);
  }

}
