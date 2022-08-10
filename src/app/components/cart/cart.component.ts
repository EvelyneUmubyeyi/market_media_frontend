import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  constructor(private httpService: HttpService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getCartItems();
  }
  getCartItems(){
    // this.route.queryParams
    // .subscribe((params:any) =>{this.CustomerId = params.data})

    this.httpService.getCartItems()
        .subscribe((xy) => this.items = xy);

        console.log(this.items);
   }

}