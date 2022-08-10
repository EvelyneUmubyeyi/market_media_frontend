import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

declare var window:any;

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {

  formModal: any;
  products:any;
  productId:any;
  counter(i: number) {
    return new Array(i);
}
  
  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    // this.formModal = new window.bootstrap.Modal(
    //   document.getElementById("exampleModal")
    // );

    this.getProductDetails();
  }
 openModal(){
  this.formModal.show();
 }
 add(){
  this.formModal.hide();
 }
 getProductDetails(){
  this.route.queryParams
  .subscribe((params:any) =>{this.productId = params.data})

  this.httpService.getProductDetails(this.productId)
      .subscribe((xy) => {this.products=xy});
 }

 setProductId(productId:number): void {
  this.router.navigate(['/productSellers'],{queryParams:{data:productId}});
}

}
