import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarData } from './sidebar-data';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  
  SideBarData = sidebarData;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onNav(event: any) {
    this.router.navigate([event.routelink]);
  }

}
