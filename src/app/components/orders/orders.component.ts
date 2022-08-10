import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders:any;
  complete = 'bi bi-check2-circle';
  incomplete = 'bi bi-x-circle-fill';
  completed = true;
  notCompleted = true;
  // valueComplete!:string;

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.httpService.getSellerOrders()
      .subscribe(response => this.orders = response);
  }

  toogleComplete(){
    this.completed = !this.completed;

    if(this.completed == true){
      this.complete = 'bi bi-check2-circle';
    }else{
      this.complete = 'bi bi-x-circle-fill';
    }
  }

  toogleIncomplete(){
    this.notCompleted = !this.notCompleted;

    if(this.notCompleted == true){
      this.incomplete = 'bi bi-x-circle-fill';
    }else{
      this.incomplete = 'bi bi-check2-circle';
    }
  }


}
