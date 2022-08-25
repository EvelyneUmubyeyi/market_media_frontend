import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { SellerService } from 'src/app/services/seller.service';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

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

  provinces: any;
  districts: any;
  sectors: any;
  cells: any;
  villages: any;

  public message!: string;
  public progress!: number;
  formData = new FormData();
  file: any;
  fileToUpload: any;
  @Output() public onUploadFinished = new EventEmitter();

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    this.formData.append('file', fileToUpload, fileToUpload.name);
    console.log(fileToUpload.name);
  }

  handleFileInput(files: any) {
    this.fileToUpload = files.target.files.item(0);
  }

  @ViewChild('provinceId') provinceId: any;
  @ViewChild('districtId') districtId: any;
  @ViewChild('sectorId') sectorId: any;
  @ViewChild('cellId') cellId: any;
  @ViewChild('villageId') villageId: any;

  url = 'https://img.icons8.com/ios/100/000000/contract-job.png';
  onSelect(event: any) {
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
    this.registra = {}
  }

  saveInBranches() {
    this.branch.sellerId = 0;
    this.branch.villageId = +this.branch.villageId;
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

      this.headquarter.Name = "HQ";
      this.headquarter.sellerId = 0;
      this.headquarter.villageId = +this.headquarter.villageId;
      this.branches.push(this.headquarter);

      if (Object.keys(this.branch).length !== 0) {
        this.branch.sellerId = 0;
        this.branch.villageId = +this.branch.villageId;
        this.branches.push(this.branch);
      }

      this.registra.contactPersonId = 3;
      this.registra.Branches = this.branches;
      this.registra.Tin = +this.registra.Tin;

      let formData = new FormData();
      formData.append('data.BusinessName', this.registra.BusinessName);
      formData.append('data.Tin', this.registra.Tin)
      formData.append('data.BusinessDescription', this.registra.BusinessDescription)
      formData.append('data.Website', this.registra.Website)
      formData.append('data.Socialmedia', this.registra.Socialmedia)
      formData.append('data.mobilePaymentCode', this.registra.mobilePaymentCode)
      formData.append('data.contactPersonId', this.registra.contactPersonId)
      console.log(this.registra.Branches)
      // for (let branch of this.branches) {
      //   formData.append('data.Branches', branch)
      // }
      formData.append('data.Branches', JSON.stringify(this.registra.Branches))
      formData.append('file', this.fileToUpload, this.fileToUpload.name)
      this.sellerService.postFile(formData).subscribe(
        result => { console.log(result.message); },
        error => { console.log(error + ''); }
      );

    }
  }


  clearForm() {
    this.registra = {};
  }

  show() {
    this.moreBranches = true;
  }

  hide() {
    this.moreBranches = false;
  }

  getProvinces() {
    this.httpService.getProvinces()
      .subscribe((xy) => { this.provinces = xy });
  }

  getDistricts(provinceId: any) {
    this.httpService.getDistricts(provinceId.target.value)
      .subscribe((xy) => { this.districts = xy });
  }

  getSectors(districtId: any) {
    this.httpService.getSectors(districtId.target.value)
      .subscribe((xy) => { this.sectors = xy });
  }

  getCells(sectorId: any) {
    this.httpService.getCells(sectorId.target.value)
      .subscribe((xy) => { this.cells = xy });
  }

  getVillages(cellId: any) {
    this.httpService.getVillages(cellId.target.value)
      .subscribe((xy) => { this.villages = xy });
  }
}




