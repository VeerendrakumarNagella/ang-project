import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  a:number;
  b:number;
  c:number = 20;
  getVal() {
    this.b = this.a;
  };
  srcPath = "../../assets/sidebar.jpg";

}
