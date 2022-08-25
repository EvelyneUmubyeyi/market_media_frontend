import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-description',
  templateUrl: './seller-description.component.html',
  styleUrls: ['./seller-description.component.scss']
})
export class SellerDescriptionComponent implements OnInit {
  sellerId:any;
  sellers:any;
  categories:any;
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
    private router: Router
    ) {
  }
  ngOnInit(): void {
    this.getSellerDetail();
    this.getSellerCategories();
  }
  getSellerDetail(){
    this.route.queryParams
    .subscribe((params:any) =>{
      this.sellerId = params.data
    })

    this.httpService.getSellerDetails(this.sellerId)
    .subscribe((xy) => {this.sellers = xy});
  }
  setSellerId(sellerId:number): void {
    this.router.navigate(['/sellerProducts'],{queryParams:{data:sellerId}});
  }

  getSellerCategories(): void {
    this.httpService.getSellerCategories()
      .subscribe(response => this.categories = response);
  }
}
