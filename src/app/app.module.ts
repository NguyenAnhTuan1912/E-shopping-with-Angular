import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
