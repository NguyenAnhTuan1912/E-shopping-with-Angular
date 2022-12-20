import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

import product_routing_patterns from './product-routing.pattern';

const routes: Routes = [
	{
		// ''
		path: product_routing_patterns['toHome'],
		component: ProductComponent,
		children: [
			{
				// /:view
				path: product_routing_patterns['toViewOfProduct'],
				component: ProductViewComponent,
			},
			{
				// /:view/:category
				path: product_routing_patterns['toCategoryOfProduct'],
				component: ProductViewComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProductRoutingModule {}
