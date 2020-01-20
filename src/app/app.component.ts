import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title: string;
  constructor() {
    console.log(environment);
    this.title = 'environment-setup';
  }
  ngOnInit() {}
}
