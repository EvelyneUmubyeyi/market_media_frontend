import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-add-deal',
  templateUrl: './add-deal.component.html',
  styleUrls: ['./add-deal.component.scss']
})
export class AddDealComponent implements OnInit {
 
  prevBtns = document.getElementsByClassName('.prev') as HTMLCollectionOf<HTMLElement>;
  nextBtns = document.getElementsByClassName('.next') as HTMLCollectionOf<HTMLElement>;
  progress = document.getElementById('progress');
  formStep = document.getElementsByClassName('.form-step') as HTMLCollectionOf<HTMLElement>;
  progressActive = document.querySelectorAll('.progressStep.active');
  
  pageOne = true;
  pageTwo = false;
  pageThree = false;
  stepOne = true;
  stepTwo = false;
  stepThree = false;

  dealType:any;

  discount:any;
  promotion:any;

  startDate: any;
  endDate: any;

  productSellerId!:number;

  openPopup:any;
  success:any;

  @ViewChild('one') one: any;  
  @ViewChild('two') two: any;  
  @ViewChild('three') three: any; 

  @ViewChild('progressOne') progressOne: any;  
  @ViewChild('progressTwo') progressTwo: any;  
  @ViewChild('progressThree') progressThree: any; 
  @ViewChild('progress') progressBar: any; 

  @ViewChild('deal') type: any; 

  constructor(
    private httpService: HttpService,
    private route:ActivatedRoute,
    private router:Router,
    private sellerService: SellerService
  ) { 
    this.discount= {};
    this.promotion = {};
    this.route.queryParams
    .subscribe((params:any) =>{
      this.productSellerId = params.data
    }) 

    console.log('received '+this.productSellerId);

  }

  ngOnInit(): void {
  }

  formStepsNum = 0;
  
  updateFormSteps(){
    this.formStep[this.formStepsNum].classList.add('active');
  }
  
  next(pageNo:any){
    if(pageNo == 2){
      this.dealType = (document.getElementById('deal')as HTMLInputElement).value;
      if(this.dealType != 0){
        this.updateProgressBar(pageNo);
        this.pageOne = false;
        this.pageTwo = true;
      }
    }else{
      if(this.dealType == 'Discount'){
        if((document.getElementById('rate')as HTMLInputElement).value.length != 0){
          this.updateProgressBar(pageNo);
          this.pageTwo = false;
          this.pageThree = true;
        }
      }else if(this.dealType == 'Promotion'){
        if((document.getElementById('promotion')as HTMLInputElement).value.length != 0){
          this.updateProgressBar(pageNo);
          this.pageTwo = false;
          this.pageThree = true;
        }
      }
      
    }

  }

  back(pageNo:any){
    this.updateProgressBar(pageNo);
    if(pageNo == 2){
      this.pageThree = false;
      this.pageTwo = true;
    }else{
      this.pageTwo = false;
      this.pageOne = true;
    }

  }

  updateProgressBar(pageNo:any){
    if (pageNo == 1){
      this.stepOne = true;
      this.stepTwo = false;
      this.stepThree = false;
      document.getElementById('progress')?.setAttribute("style", "width:0%;");
    }else if (pageNo == 2){
      this.stepOne = true;
      this.stepTwo = true;
      this.stepThree = false;
      document.getElementById('progress')?.setAttribute("style", "width:50%;");
    
    }else{
      this.stepOne = true;
      this.stepTwo = true;
      this.stepThree = true;
      document.getElementById('progress')?.setAttribute("style", "width:100%;");
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('all fields are required');
      return;
    } else {
      if(this.dealType == 'Discount'){
        this.discount.ProductSellerId = this.productSellerId;
        this.discount.StartDate = this.startDate;
        this.discount.EndDate = this.endDate;

        this.sellerService.AddDiscount(this.discount).subscribe(
          result => {
            this.openPopup = true;
            this.success = true;
          },
          error => { 
            this.openPopup = true;
            this.success = false;
           }
        );

      }else if(this.dealType == 'Promotion'){
        this.promotion.ProductSellerId = this.productSellerId;
        this.promotion.StartDate = this.startDate;
        this.promotion.EndDate = this.endDate;

        this.sellerService.AddPromotion(this.promotion).subscribe(
          result => {
            this.openPopup = true;
            this.success = true;
          },
          error => { 
            this.openPopup = true;
            this.success = false;
           }
        );
      }
    }
  }

  closePopup() {
    this.openPopup = false;
    this.router.navigate(['/SellerDashboard/MyStock']);
  }
  
}
