import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

export function getBaseUrl() {
	return document.getElementsByTagName('base')[0].href;
};
  
const providers = [
	{ provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

platformBrowserDynamic(providers).bootstrapModule(AppModule).then(ref => {
	// Ensure Angular destroys itself on hot reloads.
	if (window['ngRef']) {
		window['ngRef'].destroy();
	}
	window['ngRef'] = ref;

	// Otherwise, log the boot error
}).catch(err => console.error(err));