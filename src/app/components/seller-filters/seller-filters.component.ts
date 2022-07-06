import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-filters',
  templateUrl: './seller-filters.component.html',
  styleUrls: ['./seller-filters.component.scss']
})
export class SellerFiltersComponent implements OnInit {
  sellers: any;
  categories: any;
  name: any;
  category:any;
  rating:any;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  public getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getSellerDetail(){
    this.httpService.getSellerDetail();
  }
}
