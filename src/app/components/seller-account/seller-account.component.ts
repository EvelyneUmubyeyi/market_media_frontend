import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.scss']
})
export class SellerAccountComponent implements OnInit {

  accounts:any;
  branches:any;

  url = 'https://img.icons8.com/ios/100/000000/contract-job.png';
  onSelect(event:any) {
    let fileType = event.target.files[0].type;
    if (fileType.match('/image\/*/')) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
    } else {
      window.alert('Please select correct image format');
    }
  }

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getSellerProfile();
    this.getSellerBranches();
  }

  getSellerProfile(){
    this.httpService.getSellerProfile()
    .subscribe((response) => {this.accounts = response});
  }

  getSellerBranches(){
    this.httpService.getSellerBranches(1)
    .subscribe((xy) => this.branches = xy);    
  }

}
