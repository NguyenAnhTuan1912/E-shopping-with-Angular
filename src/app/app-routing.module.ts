import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { ErrorComponent } from './shared/components/error/error.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'products',
		loadChildren: () =>
			import('./features/product/product.module').then(m => m.ProductModule),
	},
	{
		path: 'identity',
		loadChildren: () =>
			import('./features/identity/identity.module').then(m => m.IdentityModule),
	},
	{
		path: 'search',
		component: SearchComponent,
	},
	{
		path: 'error/:id',
		component: ErrorComponent,
	},
	{
		path: '**',
		redirectTo: 'error/404',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
