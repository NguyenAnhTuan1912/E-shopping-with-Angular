import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

import { ErrorComponent } from './shared/components/error/error.component';
import { HomeComponent } from './shared/components/home/home.component';
import { MainComponent } from './shared/components/main/main.component';
import { SearchComponent } from './shared/components/search/search.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: MainComponent,
		canActivate: [AuthGuard],
		children: [
			{
				path: 'home',
				component: HomeComponent,
			},
			{
				path: 'search',
				component: SearchComponent,
			},
			{
				path: 'products',
				loadChildren: () =>
					import('./features/product/product.module').then(m => m.ProductModule),
			},
		]
	},
	{
		path: 'identity',
		loadChildren: () =>
			import('./features/identity/identity.module').then(m => m.IdentityModule),
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
