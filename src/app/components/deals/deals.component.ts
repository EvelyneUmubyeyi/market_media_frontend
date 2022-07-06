import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  categories: any;
  deals:any;
  discount=true;
  @ViewChild('categoryId') categoryId: any;  
  counter(i: number) {
    return new Array(i);
}

  constructor(private httpService: HttpService) { }

  ngAfterViewInit(){
    this.getDeals();
  }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getDeals(): void {
    this.httpService.getDeals(parseInt(this.categoryId.nativeElement.value))
    .subscribe((response) => this.deals = response);
  }

}
