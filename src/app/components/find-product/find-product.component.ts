import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-find-product',
  templateUrl: './find-product.component.html',
  styleUrls: ['./find-product.component.scss']
})
export class FindProductComponent implements OnInit {
  products:any;
  categoryId!: number;
  
  constructor(private httpService: HttpService,
    private route:ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.getProducts(); 
  }

  getProducts(){
    // this.route.queryParams
    // .subscribe((params:any) =>{
    //   this.categoryId = params.data
    // })
    this.httpService.emmiter
    .subscribe((results) => {this.categoryId = results});

    console.log(this.categoryId);
    this.httpService.getProducts(this.categoryId)
    .subscribe((results) => {this.products = results});
  }
}
