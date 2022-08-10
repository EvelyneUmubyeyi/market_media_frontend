import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  show: boolean = false;
  isCollapsed = true;
  mb: any;
  invalidLogin: any;
  user:any;

  constructor(
    private authenticationService: AuthenticationService,
    public nav: NavBarService) {
    this.mb = {}
    this.user = {}
  }

  Login(form: NgForm) {
    const credentials = {
      'Emailaddress': form.value.Emailaddress,
      'password': form.value.password
    }

  }


  password() {
    this.show = !this.show;
  }
  toggleCollapsed() {

    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
    this.nav.hide();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(form);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if (!this.authenticationService.authenticate(this.user)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

  clearForm() {
    this.mb = {};
  }
}
