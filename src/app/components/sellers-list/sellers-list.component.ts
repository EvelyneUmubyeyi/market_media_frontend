import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-sellers-list',
  templateUrl: './sellers-list.component.html',
  styleUrls: ['./sellers-list.component.scss']
})
export class SellersListComponent implements OnInit {

  sellers:any;

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getSellers();
  }

  getSellers(){
    this.httpService.getSellersNames()
      .subscribe((response) => {this.sellers = response});
      // console.log(this.sellers);
  }

  setBusinessId(bssId:number): void {
    this.router.navigate(['/sellerProductsAdmin'],{queryParams:{data:bssId}});
  }
}
