import { Component, ViewEncapsulation } from "@angular/core";
import AppRouterLinkModel from "src/app/shared/models/AppRouterLinkModel";

@Component({
    selector: 'app-identity',
    templateUrl: './identity.component.html',
    styleUrls: ['./identity.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class IdentityComponent {
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