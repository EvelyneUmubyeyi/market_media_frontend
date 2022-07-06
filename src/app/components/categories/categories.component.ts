import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private httpService: HttpService,
    private route:Router
    ) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  setCategoryId(categoryId:number): void {
    // this.httpService.setCategoryId(categoryId) ;
    // this.route.navigate(['/products'],{queryParams:{data:categoryId}});
    this.route.navigate(['/products']).then(()=>
    this.httpService.emmiter.emit(categoryId))

  }

}
