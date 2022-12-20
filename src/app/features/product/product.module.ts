import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ProductComponent } from './product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
	imports: [SharedModule, ProductRoutingModule],
	declarations: [ProductComponent, ProductViewComponent],
})
export class ProductModule {
	constructor() {
		console.log('Product Module is created!');
	}
}
