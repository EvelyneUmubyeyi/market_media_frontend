import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-application-form',
  templateUrl: './seller-application-form.component.html',
  styleUrls: ['./seller-application-form.component.scss']
})
export class SellerApplicationFormComponent implements OnInit {
  moreBranches = false;
  registra: any;
  checked: boolean = false

  branches: any[] = [];
  branch: any = {};
  headquarter: any = {};

  provinces:any;
  districts:any;
  sectors:any;
  cells:any;
  villages:any;

  @ViewChild('provinceId') provinceId: any; 
  @ViewChild('districtId') districtId: any; 
  @ViewChild('sectorId') sectorId: any; 
  @ViewChild('cellId') cellId: any; 
  @ViewChild('villageId') villageId: any; 

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
  };


  constructor(
    private http: HttpClient,
    private sellerService: SellerService,
    private httpService: HttpService) {
    // this.Registra = new Seller();
    this.registra = {}
  }

  saveInBranches() {
    this.branches.push(this.branch);
    this.branch = {}
  }
  
  ngOnInit(): void {
    this.getProvinces();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('all fields are required');
      return;
    } else {
      // this.headquarter.Name = "HQ";
      this.branches.push(this.headquarter);
      this.branches.push(this.branch);
      console.log(this.branches);
      this.registra.Branches = this.branches;
      console.log(this.registra)
      // this.sellerService.sellerRegistration(this.registra)
      // .subscribe(
      //   result => { console.log(result.message); },
      //   error => { console.log(error + '');}
      // )
    }
  }


  clearForm() {
    this.registra = {};
  }

  show(){
    this.moreBranches= true;
  }

  hide(){
    this.moreBranches= false;
  }

  getProvinces(){
    this.httpService.getProvinces()
      .subscribe((xy) => {this.provinces=xy});
  }

  getDistricts(provinceId:any){
    this.httpService.getDistricts(provinceId.target.value)
      .subscribe((xy) => {this.districts=xy});
  }  
  
  getSectors(districtId:any){
    this.httpService.getSectors(districtId.target.value)
      .subscribe((xy) => {this.sectors=xy});
  }

  getCells(sectorId:any){
    this.httpService.getCells(sectorId.target.value)
      .subscribe((xy) => {this.cells=xy});
  }  
  
  getVillages(cellId:any){
    this.httpService.getVillages(cellId.target.value)
      .subscribe((xy) => {this.villages=xy});
  }
}




