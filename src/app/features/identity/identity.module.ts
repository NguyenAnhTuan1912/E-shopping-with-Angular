import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { IdentityRoutingModule } from "./identity-rounting.module";

import { IdentityComponent } from "./identity.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

@NgModule({
    imports: [SharedModule, ReactiveFormsModule, IdentityRoutingModule],
    declarations: [IdentityComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ResetPasswordComponent],
    exports: []
})
export class IdentityModule {
    constructor() {
		console.log('Identity Module is created!');
	}
}