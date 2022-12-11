import { Component } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
	isAuthorized: boolean = false;
	jwtHelper: JwtHelperService = new JwtHelperService();;

	constructor() {
		const isTokenExpired = this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
		this.isAuthorized = !isTokenExpired;
	}
}