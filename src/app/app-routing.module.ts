import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
	{
		path: '',
		canActivate: [AuthGuard],
		loadChildren: () => import('./features/layout/layout.module').then(m => m.LayoutModule)
	},
	{
		path: 'identity',
		loadChildren: () => import('./features/identity/identity.module').then(m => m.IdentityModule),
	},
	{
		path: 'error',
		loadChildren: () => import('./features/error/error.module').then(m => m.ErrorModule)
	},
	{
		path: '**',
		redirectTo: 'error',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
