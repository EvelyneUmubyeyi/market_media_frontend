import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarData } from './sidebar-data';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
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
