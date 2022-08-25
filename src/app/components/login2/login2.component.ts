import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from 'src/app/model/signInData';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

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
}
