import { APIResponse, Category } from './../../models';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories: any;
  // categoryId = 0;
  parameters:any;
  @ViewChild('categoryId') categoryId: any; 
  @ViewChild('productName') productName: any; 

  constructor(private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router,
    public nav: NavBarService,
    public authenticationService: AuthenticationService
    ) {}

  // ngAfterViewInit(){
  //    this.setSearchParameters();
  // }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.httpService.getMainCategories()
      .subscribe(categories => this.categories = categories);
  }

  // getCategoryId(): void{
  //   this.categoryId = this.httpService.getCategoryId();
  // }
  onSubmit(form: NgForm) {
    this.parameters = form.value.productName; 
    this.router.navigate(['/products', {queryParams:{data:this.parameters
    }}]);
  }
  // setSearchParameters(): void {
  //   this.parameters = (this.categoryId.nativeElement.value) + ','+ this.productName.nativeElement.value;
  //   console.log('Holla'+this.parameters);
  //   this.router.navigate(['/products'],{queryParams:{data:this.parameters}});
  // }

  logout(){
    this.authenticationService.logout();
  }
}
 