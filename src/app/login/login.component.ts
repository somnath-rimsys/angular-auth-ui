import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentSection: 'login'|'register' = 'login';
  loginForm: any;
  registrationForm: any;
  socialUser!: SocialUser;

  constructor(
    private fb:FormBuilder,
    private socialAuthService: SocialAuthService,
    private authService: AuthServiceService
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

    this.registrationForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation: [''],
    })

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
    });
  }


  changeSection(event: any) {
    event.preventDefault();
    this.currentSection = this.currentSection === 'login' ? 'register': 'login';
  }

  login() {
    console.log(this.loginForm.value)
  }

  register() {
    console.log(this.registrationForm.value);
    this.authService.createUser(this.registrationForm.value).subscribe((data) => {
      console.log(data)
    })
  }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .catch(err=>{
      console.error(err);
    })
  }

  facebookLogin() {

  }

  linkedinlogin() {

  }

}
