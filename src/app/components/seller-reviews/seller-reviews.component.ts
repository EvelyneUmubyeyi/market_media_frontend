import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-reviews',
  templateUrl: './seller-reviews.component.html',
  styleUrls: ['./seller-reviews.component.scss']
})
export class SellerReviewsComponent implements OnInit {

  reviews:any;
  ratings:any;

  counterRound(i: number) {
    return new Array(Math.floor(i));
  }

  counter(i: number) {
    return new Array(i);
  }

  round(i: number){
    return (Math.ceil(i))
  }

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRating();
    this.getReviews();
  }

  getReviews(){
    this.httpService.getSellerReviews()
      .subscribe((response) => {this.reviews = response});
  }

  getRating(){
    this.httpService.getSellerRating()
      .subscribe((response) => {this.ratings = response});
  }

}
