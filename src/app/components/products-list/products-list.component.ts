import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  bssId:any;
  products:any;
  counter(i: number) {
    return new Array(i);
}

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params:any) =>{this.bssId = params.data})
    this.getProducts();
  }

  getProducts(){
    this.httpService.getSellerProductsAdmin(0,this.bssId,0,0)
      .subscribe((response) => {this.products = response});
  }
}
