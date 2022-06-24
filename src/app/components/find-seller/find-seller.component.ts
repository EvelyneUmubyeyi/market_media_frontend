import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-find-seller',
  templateUrl: './find-seller.component.html',
  styleUrls: ['./find-seller.component.scss']
})
export class FindSellerComponent implements OnInit {

  sellers: any;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.getSellers();
  }

  private getSellers(): void {
    this.httpService.getSellers()
      .subscribe(sellers => this.sellers = sellers);
  }

}
