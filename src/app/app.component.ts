//datayı yonettigimiz yer   - angularda her sey class
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})  
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Kerem Kaplan';
  
}
