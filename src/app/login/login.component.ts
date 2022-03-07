import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentSection: 'login'|'register' = 'login';
  loginForm: any;
  registrationForm: any;

  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })

    this.registrationForm = this.fb.group({
      name: [''],
      email: [''],
      password: ['']
    })
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
  }

  googleLogin() {

  }

  facebookLogin() {

  }

  linkedinlogin() {

  }

}
