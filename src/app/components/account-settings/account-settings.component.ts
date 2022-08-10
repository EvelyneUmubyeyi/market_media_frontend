import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  show: boolean = false;
  settings:any;

  constructor(
    private httpService: HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) {
  }

  // click event function toggle
  password() {
      this.show = !this.show;
  }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings(): void {
    this.httpService.getAccountSettings()
      .subscribe(response => this.settings = response);
  }

}
