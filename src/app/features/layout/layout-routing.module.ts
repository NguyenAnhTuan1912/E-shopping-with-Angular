import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "src/app/shared/components/search/search.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutComponent } from "./components/layout/layout.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
		path: '',
		component: LayoutComponent,
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
				loadChildren: () => import('../product/product.module').then(m => m.ProductModule),
			},
		]
	},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}