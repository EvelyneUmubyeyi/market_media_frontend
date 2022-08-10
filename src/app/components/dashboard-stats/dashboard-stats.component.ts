import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard-stats',
  templateUrl: './dashboard-stats.component.html',
  styleUrls: ['./dashboard-stats.component.scss']
})
export class DashboardStatsComponent implements OnInit {

  stats:any;
  categories:any;

  constructor(
    private httpService: HttpService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.getStats();
    this.getSellerCategories();
  }

  getStats(): void {
    this.httpService.getSellerStats()
      .subscribe(response => this.stats = response);
  }

  getSellerCategories(): void {
    this.httpService.getSellerCategories()
      .subscribe(response => this.categories = response);
  }

}
