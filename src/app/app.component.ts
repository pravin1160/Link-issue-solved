import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  imageUrl: string =
    'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-760x400.png';
  imageWidth: number = 120;
  imageHeight: number = 120;
  login: string = 'https://www.facebook.com';
}
