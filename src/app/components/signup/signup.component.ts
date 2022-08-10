import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  show: boolean = false;
  isCollapsed = true;
  mb:any;
  
  constructor(
    private SignInService:SignInService, 
    public nav: NavBarService) { 
    this.mb = {}
  }
// click event function toggle
password() {
  this.show = !this.show;
}
toggleCollapsed(){

console.log(this.isCollapsed);
this.isCollapsed = !this.isCollapsed;
}

  ngOnInit(): void {
    this.nav.hide();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('all fields are required');
      return;
    } else {
      console.log(this.mb)
      this.SignInService.signIn(this.mb)
      .subscribe(
        result => { console.log(result.message); },
        error => { console.log(error + '');}
      )
    }
  }

  clearForm() {
    this.mb = {};
  }
}


