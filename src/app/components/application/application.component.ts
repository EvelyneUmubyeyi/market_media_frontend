import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  bssId:any;
  applications:any;
  branches !:any[];
  branchesno:any;

  constructor(
    private httpService: HttpService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe((params:any) =>{this.bssId = params.data})
    this.getSellerApplication();
    this.getSellerBranches();
  }
  
  getSellerApplication(){
    this.httpService.getSellerApplication(this.bssId)
    .subscribe((xy) => this.applications = xy);
  }

  getSellerBranches(){
    this.httpService.getSellerBranches(this.bssId)
    .subscribe((xy) => this.branches = xy);
    
    // console.log(typeof this.branches);
    this.branchesno = (this.branches).length;
    // console.log(this.branchesno);
    
  }
}
