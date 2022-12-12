import { Component } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {
	isAuthorized: boolean = false;
	jwtHelper: JwtHelperService = new JwtHelperService();;

	constructor(private auth: AuthService) {
		const isTokenExpired = this.jwtHelper.isTokenExpired(this.auth.getTokenInLocalStorage());
		this.isAuthorized = !isTokenExpired;
	}
}