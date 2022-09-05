import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-edit-stock-item',
  templateUrl: './edit-stock-item.component.html',
  styleUrls: ['./edit-stock-item.component.scss']
})
export class EditStockItemComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private sellerService: SellerService,
  ) {
    this.item = {}
    this.updates ={}
    this.route.queryParams
      .subscribe((params: any) => {
        this.productSellerId = params.data
      })
    this.updates={}
  }

  ngOnInit(): void {
    this.getProductInfo();
    this.getCategories();
    this.getProducts();
    this.getManufacturers();
  }

  item: any;
  updates:any;
  categories: any;
  products: any;
  publish_status: any;
  manufacturers: any;
  url: any;
  openPopup: any;
  success: any;
  productDetails: any;

  public message!: string;
  public progress!: number;
  formData = new FormData();
  file: any;
  fileToUpload: any;
  @Output() public onUploadFinished = new EventEmitter();

  @ViewChild('manufacturer') manufacturer: any;
  @ViewChild('description') description: any;
  @ViewChild('categoryId') categoryId: any;

  productSellerId!: number;

  private _uploadFile = (files: any) => {
    if (files.target.files) {
      let fileToUpload = <File>files[0];
      this.formData.append('file', fileToUpload, fileToUpload.name);
      var reader = new FileReader();
      reader.readAsDataURL(files.target.files[0]);
      reader.onload = (files: any) => {
        this.url = files.target.result;
        console.log(this.url);
      }
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
    if (files.target.files) {
      this.fileToUpload = files.target.files.item(0);
      var reader = new FileReader();
      reader.readAsDataURL(files.target.files[0]);
      reader.onload = (files: any) => {
        this.url = files.target.result;
      }

    }
  }

  clearForm() {
    this.item = {};
  }

  getCategories(): void {
    this.httpService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getProducts() {
    this.httpService.getProductsInCategory(0)
      .subscribe((results) => { this.products = results });
  }

  publish(str: string) {
    this.publish_status = str;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('all fields are required');
      return;
    } else {

      this.updates.sellerId = 1;
      
      if(this.updates.quantity > 0){
        this.updates.availabilityStatus = 'Yes';
      }else{
        this.updates.availabilityStatus = 'No';
      }

      let formData = new FormData();
      // formData.append('Name', (document.getElementById('ProdName')as HTMLInputElement).value);
      formData.append('Name', this.updates.productName);
      formData.append('Description', this.updates.productDescription);
      if (Number.isInteger(+this.updates.manufacturerId)) {
        formData.append('ManufacturerId', this.updates.manufacturerId);
      } else {
        formData.append('ManufacturerName', this.updates.manufacturerId);
      }
      formData.append('categoryId', this.updates.categoryId);
      formData.append('MeasurementUnit', this.updates.measurementUnit);
      formData.append('quantityPerUnit', this.updates.quantityPerUnit);
      formData.append('price', this.updates.totalPrice);
      formData.append('quantity', this.updates.quantity);
      formData.append('sellerId', this.updates.sellerId);
      formData.append('published', this.publish_status);
      if (this.fileToUpload) {
        formData.append('file', this.fileToUpload, this.fileToUpload.name)
      }
      this.sellerService.editStockItem(formData, this.productSellerId).subscribe(
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

  getManufacturers() {
    this.httpService.getManufacturers()
      .subscribe((results) => { this.manufacturers = results });
  }

  closePopup() {
    this.openPopup = false;
    this.router.navigate(['/SellerDashboard/MyStock']);
  }

  getProductInfo() {
    this.sellerService.ProductInfo(this.productSellerId)
      .subscribe((results) => { this.updates = results; 
        console.log(results);
        this.updates.categoryId = results.categoryId;
        this.url = results.ImageUrl
    });

    // type ObjectKey = keyof typeof this.item;
    // const image = 'ImageUrl' as ObjectKey;
    // console.log('Hey'+this.item[image]); 
    // this.url = 'https://images.unsplash.com/photo-1599832110430-da30b996c917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
    // console.log('Hey' + JSON.stringify(this.item));
  }  
}
