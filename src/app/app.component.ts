import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentSection: 'login'|'register' = 'login';

  changeSection(event: any) {
    event.preventDefault();
    this.currentSection = this.currentSection === 'login' ? 'register': 'login';
  }

  login(event: any) {
    event.preventDefault();
    console.log("Login")
  }

  register(event: any) {
    event.preventDefault();
    console.log("Register")
  }
}
