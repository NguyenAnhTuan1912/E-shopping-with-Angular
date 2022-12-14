import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "./components/error/error.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404'
    },
    {
        path: ':id',
        component: ErrorComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule {}