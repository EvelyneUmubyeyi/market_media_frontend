import { Category } from './../../models';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-find-seller',
  templateUrl: './find-seller.component.html',
  styleUrls: ['./find-seller.component.scss']
})
export class FindSellerComponent implements OnInit {

  sellers: any;
  categories: any;
  name: any;
  slrs:any;
  //categories;
  // sellerId = document.getElementById('example') as HTMLElement;
  @ViewChild('sellerId') sellerId: any; 
  @ViewChild('categoryId') categoryId: any;  
  @ViewChild('rating') rating: any; 
  
  counter(i: number) {
    return new Array(i);
}

  constructor(private httpService: HttpService) {
  }
  ngAfterViewInit(){
    this.getSellerDetail();
  }
  ngOnInit() {
    this.getCategories();  
    this.getSellersNames(); 
  }

  getCategories(){
    this.httpService.getCategories()
      .subscribe((response) => {this.categories = response});
  }

  getSellersNames(){
    this.httpService.getSellersNames()
      .subscribe((response) => {this.slrs = response});
  }

  getSellerDetail(){
    this.httpService.getSellerDetail(parseInt(this.sellerId.nativeElement.value),parseInt(this.categoryId.nativeElement.value),parseInt(this.rating.nativeElement.value))
    .subscribe((xy) => {this.sellers = xy});
  }

}
