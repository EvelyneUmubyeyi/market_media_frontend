import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-applications',
  templateUrl: './seller-applications.component.html',
  styleUrls: ['./seller-applications.component.scss']
})
export class SellerApplicationsComponent implements OnInit {
  applications:any;

  constructor(private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.getApplications();
  }

  getApplications(){
    this.httpService.getSellersApplications()
      .subscribe((xy) => {this.applications=xy});
  }

  setBusinessId(bssId:number): void {
    this.router.navigate(['/sellerApplication'],{queryParams:{data:bssId}});
  }

}
