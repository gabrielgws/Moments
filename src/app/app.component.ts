import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = "Gabriel";

  userData = {
    email: 'gabrielgws.dev@gmail.com',
    role: 'Admin'
  }

  title = 'curso-angular-13-2022';
}
