import { Component, VERSION, OnInit } from '@angular/core';

import AppRouterLinkModel from './shared/models/AppRouterLinkModel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
