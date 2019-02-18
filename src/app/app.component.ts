import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:number = 10;
  sourcePath = "../assets/account-icon.png";
  b = 50;
  c = 50;
  hello() {
    alert("hello world!");
  }
}
