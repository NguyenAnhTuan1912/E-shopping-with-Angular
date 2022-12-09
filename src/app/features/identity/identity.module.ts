import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { IdentityRoutingModule } from "./identity-rounting.module";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { IdentityCenterPage } from "./pages/identity-center/identity-center.component";

@NgModule({
    imports: [SharedModule, IdentityRoutingModule],
    declarations: [IdentityCenterPage, LoginComponent, RegisterComponent]
})
export class IdentityModule {
    constructor() {
		console.log('Identity Module is created!');
	}
}