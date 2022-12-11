import { Component, VERSION, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import AppRouterLinkModel from './shared/models/AppRouterLinkModel';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	name = 'Angular ' + VERSION.major;
	isAuthorized: boolean = false;
	jwtHelper: JwtHelperService = new JwtHelperService();;

	constructor() {
		const isTokenExpired = this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
		this.isAuthorized = !isTokenExpired;
	}
}
