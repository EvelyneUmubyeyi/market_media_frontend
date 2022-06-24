import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  private getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

}
