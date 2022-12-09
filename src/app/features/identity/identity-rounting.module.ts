import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import identity_routing_patterns from "./identity-routing.pattern";
import { IdentityCenterPage } from "./pages/identity-center/identity-center.component";

const routes: Routes = [
    {
        path: identity_routing_patterns['toHome'],
        component: IdentityCenterPage,
        children: [
            {
                path: identity_routing_patterns['toLogin'],
                component: LoginComponent
            },
            {
                path: identity_routing_patterns['toRegister'],
                component: RegisterComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IdentityRoutingModule {}