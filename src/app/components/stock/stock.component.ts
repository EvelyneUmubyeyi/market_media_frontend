import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products:any;

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpService.getSellerProducts()
      .subscribe((response) => {this.products = response});
  }
  
}
