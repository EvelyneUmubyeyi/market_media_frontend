import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';

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
  noResult = true;
  openPopup = false;
  success: any;
  error:any;
  productSellerId:any;

  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router,
    private sellerService: SellerService
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

  setProductSellerId(id:number, choice:string){
    if(choice == 'deal'){
      console.log('set '+id);
      this.router.navigate(['/SellerDashboard/PutOnDeal'],{queryParams:{data:id}});
    }else if(choice == 'edit'){
      console.log('set '+id);
      this.router.navigate(['/SellerDashboard/EditStockItem'],{queryParams:{data:id}});
    }else{
      console.log('set '+id);
      this.productSellerId = id;
      this.openPopup = true;
    }
  }

  delete(){
    this.sellerService.DeleteProduct(this.productSellerId).subscribe(
      result => {
        this.noResult = false;
        this.success = true;
      },
      error => {
        this.noResult = false;
        this.error = true;
      }
    );
  }

  closePopup() {
    this.openPopup = false;
    this.router.navigate(['/SellerDashboard/MyStock']);
  }

}
