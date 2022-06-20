import { APIResponse, Category } from './../../models';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
