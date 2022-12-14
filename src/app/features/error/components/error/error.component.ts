import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

const ERROR_MESSAGES = {
	404: 'Page not found :(',
};

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.css'],
})
export class ErrorComponent {
	code: number;
	message: string;

	routeSubscription = new Subscription();

	constructor(private route: ActivatedRoute) {
		this.routeSubscription = this.route.url.subscribe((url) => {
			console.log(url);
			this.code = parseInt(url[0].path);
			this.message = ERROR_MESSAGES[this.code];
		});
	}
}
