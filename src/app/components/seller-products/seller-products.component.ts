import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.scss']
})
export class SellerProductsComponent implements OnInit {

  products: any;
  sellerProducts:any;
  categories: any;
  name: any;
  slrs:any;
  sellerId=0;
  
  @ViewChild('productId') productId: any; 
  @ViewChild('categoryId') categoryId: any; 
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
    this.getProductBySellers();
  }
  ngOnInit() {
    this.getCategories(); 
    this.route.queryParams
    .subscribe((params:any) =>{
      this.sellerId = params.data
    }) 
    this.getProducts();
  }

  getCategories(){
    this.httpService.getMainCategories()
      .subscribe((response) => {this.categories = response});
  }

  getProductBySellers(){
    this.httpService.getProductsBySeller(parseInt(this.productId.nativeElement.value), this.sellerId,
    parseInt(this.categoryId.nativeElement.value), parseInt(this.rating.nativeElement.value))
    .subscribe((xy) => {this.products=xy});
  }

  getProducts(){
    this.httpService.getProductsFilter(this.sellerId)
    .subscribe((response) => {this.sellerProducts=response});
  }

  setProductId(productId:number): void {
    this.router.navigate(['/productSellers'],{queryParams:{data:productId}});
  }
}
