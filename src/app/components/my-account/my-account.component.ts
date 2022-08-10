import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sidebarData } from './sidebar-data';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  
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
