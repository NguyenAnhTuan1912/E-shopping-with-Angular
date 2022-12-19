import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import UserModel from '../../models/UserModel';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input() title: string = 'Title here';
	@Input() hasSearchBar: boolean = true;
	@Input() isAuthorized: boolean = true;

	user: UserModel;

	constructor(private userService: UserService) {
		this.user = this.userService.getUser();
		console.log(this.user);
	}

	logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("access_token");
        localStorage.removeItem("id");
        window.location.reload();
    }
}