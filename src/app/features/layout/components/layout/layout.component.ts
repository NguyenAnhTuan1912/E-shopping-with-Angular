import { Component } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
	isAuthorized: boolean = false;
	jwtHelper: JwtHelperService = new JwtHelperService();;

	constructor(private auth: AuthService) {
		const isTokenExpired = this.jwtHelper.isTokenExpired(this.auth.getTokenInLocalStorage());
		this.isAuthorized = !isTokenExpired;
	}
}