import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss']
})
export class FindProductComponent implements OnInit {
  products:any;
  subCategories:any;
  categoryId:any;
  parameters:any;
  private routeSub: any;

  constructor(private httpService: HttpService,
    private route:ActivatedRoute,
    private router:Router
    ) { }

  ngAfterViewInit(){
    this.getCategories();
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params:any) =>{
      this.categoryId = params.data
    });

    // this.routeSub = this.route.params.subscribe((params: Params) => {
    //   this.parameters = params
    // });

   
    this.getProducts(); 
  }

  getCategories(){
    console.log('Hey'+ this.categoryId);
    this.httpService.getSubCategories(this.categoryId)
      .subscribe((response) => {this.subCategories=response});
  }

  getProducts(){
    this.httpService.getProductsInCategory(this.categoryId)
    .subscribe((results) => {this.products = results});
  }

  setProductId(productId:number): void {
    this.router.navigate(['/productSellers'],{queryParams:{data:productId}});
  }

  setProductIdDescription(productId:number): void {
    this.router.navigate(['/productDescription'],{queryParams:{data:productId}});
  }
  
}
