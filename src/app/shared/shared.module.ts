import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { PercentPipe } from './pipes/percent.pipe';
import { SpecialCharacterToSpacePipe } from './pipes/specialCharacterToSpace.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    PercentPipe,
    SpecialCharacterToSpacePipe,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    PercentPipe,
    SpecialCharacterToSpacePipe,
  ],
})
export class SharedModule {
  constructor() {
    console.log('Shared Module is created!');
  }
}
