import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const ERROR_CODES = {
	'401': 401,
	'403': 403,
	'404': 404,
	'408': 408,
};

@Injectable()
export class ErrorHandlerService {
	constructor(private router: Router) {}

	notAuthorized(exMessage: string) {
		console.error(`Error code ${ERROR_CODES['401']}` + exMessage);
		this.router.navigate(['/error/401']);
	}

	forbidden(exMessage: string) {
		console.error(`Error code ${ERROR_CODES['403']}` + exMessage);
		this.router.navigate(['/error/403']);
	}

	notFound(exMessage: string) {
		console.error(`Error code ${ERROR_CODES['404']}` + exMessage);
		this.router.navigate(['/error/404']);
	}

	invalidFormPU(exMessage: string) {
		console.log(exMessage);
	}
}
