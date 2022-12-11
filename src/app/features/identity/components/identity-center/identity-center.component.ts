import { Component, ViewEncapsulation } from "@angular/core";
import AppRouterLinkModel from "src/app/shared/models/AppRouterLinkModel";

@Component({
    selector: 'app-identity',
    templateUrl: './identity-center.component.html',
    styleUrls: ['./identity-center.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class IdentityCenterPage {
    public listSubIdentityPageLinks: AppRouterLinkModel[] = [
        {
            name: 'Login',
            link: 'login'
        },
        {
            name: 'Register',
            link: 'register'
        }
    ];
}