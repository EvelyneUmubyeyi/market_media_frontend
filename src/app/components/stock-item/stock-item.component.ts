import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  item:any;
  categories:any;
  products:any;
  publish_status:any;
  manufacturers:any;
  url:any;
  openPopup:any;
  success:any;

  public message!: string;
  public progress!: number;
  formData = new FormData();
  file: any;
  fileToUpload: any;
  @Output() public onUploadFinished = new EventEmitter();

  @ViewChild('manufacturer') manufacturer: any;

  private _uploadFile = (files: any) => {
    // if (files.length === 0) {
    //   return;
    // }
    if (files.target.files){
      console.log('Hey');
      let fileToUpload = <File>files[0];
      this.formData.append('file', fileToUpload, fileToUpload.name);
      var reader = new FileReader();
      console.log('yyy');
      reader.readAsDataURL(files.target.files[0]);
      reader.onload=(files:any)=>{
        this.url = files.target.result;
        console.log(this.url);
      }
      console.log('Youuuuu');

    }
  };

  public get uploadFile() {
    return this._uploadFile;
  }
  public set uploadFile(value) {
    this._uploadFile = value;
  }

  handleFileInput(files: any) {
    // this.fileToUpload = files.target.files.item(0);
    if (files.target.files){
      this.fileToUpload = files.target.files.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(files.target.files[0]);
      reader.onload=(files:any)=>{
        this.url = files.target.result;
      }

    }
  }


  constructor(
    private httpService: HttpService,    
    private route:ActivatedRoute,
    private router:Router,
    private http: HttpClient,
    private sellerService: SellerService,
  ) {
    this.item={}
   }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
    this.getManufacturers();
  }

  clearForm() {
    this.item = {};
  }

  getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getProducts(){
    this.httpService.getProductsInCategory(0)
    .subscribe((results) => {this.products = results});
  }

  publish(str:string){
    this.publish_status = str;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('all fields are required');
      return;
    } else {

      this.item.sellerId = 1;
      this.item.published = this.publish_status;
      
      let formData = new FormData();
      formData.append('Name', this.item.Name);
      formData.append('Description', this.item.Description);
      if(Number.isInteger(+this.item.ManufacturerId)){
        formData.append('ManufacturerId', this.item.ManufacturerId);
      }else{
        formData.append('ManufacturerName', this.item.ManufacturerId);
      }
      formData.append('categoryId', this.item.categoryId);
      formData.append('MeasurementUnit', this.item.MeasurementUnit);
      formData.append('quantityPerUnit', this.item.quantityPerUnit);
      formData.append('price', this.item.price);
      formData.append('quantity', this.item.quantity);
      formData.append('sellerId', this.item.sellerId);
      formData.append('published', this.publish_status);
      if (this.fileToUpload){
        formData.append('file', this.fileToUpload, this.fileToUpload.name)
      }
      this.sellerService.addStockItem(formData).subscribe(
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

  getManufacturers(){
    this.httpService.getManufacturers()
    .subscribe((results) => {this.manufacturers = results});
  }

  closePopup() {
    this.openPopup = false;
    this.router.navigate(['/SellerDashboard/MyStock']);
  }
  
}
