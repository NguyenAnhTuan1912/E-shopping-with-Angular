import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

import identity_routing_patterns from "./identity-routing.pattern";
import { IdentityCenterPage } from "./components/identity-center/identity-center.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: identity_routing_patterns['toLogin'],
        pathMatch: 'full'
    },
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
            },
            {
                path: identity_routing_patterns['toForgotPassword'],
                component: ForgotPasswordComponent
            },
            {
                path: identity_routing_patterns['toResetPassword'],
                component: ResetPasswordComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IdentityRoutingModule {}