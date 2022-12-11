import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		RouterModule,
		HttpClientModule,
		AppRoutingModule,
		CoreModule,
		SharedModule,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
