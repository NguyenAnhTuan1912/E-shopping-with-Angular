import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { SearchBarComponent } from './components/searchbar/searchbar.component';

import { PercentPipe } from './pipes/percent.pipe';
import { SpecialCharacterToSpacePipe } from './pipes/specialCharacterToSpace.pipe';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		MainComponent,
		HeaderComponent,
		NavbarComponent,
		HomeComponent,
		SearchComponent,
		SearchBarComponent,
		PercentPipe,
		SpecialCharacterToSpacePipe,
	],
	exports: [
		CommonModule,
		MainComponent,
		HeaderComponent,
		NavbarComponent,
		HomeComponent,
		SearchComponent,
		SearchBarComponent,
		PercentPipe,
		SpecialCharacterToSpacePipe,
	],
})
export class SharedModule {
	constructor() {
		console.log('Shared Module is created!');
	}
}
