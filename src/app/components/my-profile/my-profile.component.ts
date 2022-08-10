;import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  profiles:any;

  constructor(private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.httpService.getCustomerProfile()
      .subscribe(response => this.profiles = response);
  }

}
