import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/searchbar/searchbar.component';
import { PopupBannerComponent } from './components/pop-up/pop-up-banner.component';

import { PopupDirective } from './directives/pop-up.directive';

import { PercentPipe } from './pipes/percent.pipe';
import { SpecialCharacterToSpacePipe } from './pipes/specialCharacterToSpace.pipe';
import { PopupComponent } from './components/pop-up/pop-up.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		HeaderComponent,
		NavbarComponent,
		SearchComponent,
		SearchBarComponent,
		PopupBannerComponent,
		PopupComponent,
		PopupDirective,
		PercentPipe,
		SpecialCharacterToSpacePipe,
	],
	exports: [
		CommonModule,
		HeaderComponent,
		NavbarComponent,
		SearchComponent,
		SearchBarComponent,
		PopupBannerComponent,
		PopupComponent,
		PopupDirective,
		PercentPipe,
		SpecialCharacterToSpacePipe,
	],
})
export class SharedModule {
	constructor() {
		console.log('Shared Module is created!');
	}
}
