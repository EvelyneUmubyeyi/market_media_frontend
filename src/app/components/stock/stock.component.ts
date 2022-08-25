import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  products:any;
  complete = 'bi bi-check2-circle';
  incomplete = 'bi bi-x-circle-fill';
  completed = true;
  notCompleted = true;

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpService.getSellerProducts()
      .subscribe((response) => {this.products = response});
  }

  toogleIncomplete(){
    this.notCompleted = !this.notCompleted;

    if(this.notCompleted == true){
      this.incomplete = 'bi bi-x-circle-fill';
    }else{
      this.incomplete = 'bi bi-check2-circle';
    }
  }

  toogleComplete(){
    this.completed = !this.completed;

    if(this.completed == true){
      this.complete = 'bi bi-check2-circle';
    }else{
      this.complete = 'bi bi-x-circle-fill';
    }
  }
}
