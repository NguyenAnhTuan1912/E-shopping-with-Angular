import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../services/auth.service';
import { IDTokenPayloadModel } from 'src/app/shared/models/JWTPayloadModel';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const id_token = this.auth.getTokenInLocalStorage();
        const jwtHelper = new JwtHelperService();
        const decodedToken: IDTokenPayloadModel = jwtHelper.decodeToken(id_token);
        // console.log(decodedToken);
        // console.log("Authorized condition: ", token !== null  && !jwtHelper.isTokenExpired(token));
        // console.log('Is token null? ', token);
        // console.log('Is token expired? ', jwtHelper.isTokenExpired(token));
        if(id_token !== null && !jwtHelper.isTokenExpired(id_token)) {
            // let roles = route.data['permittedRoles'] as Array<string>;
            if(!this.auth.getUserIdInLocalStorage()) {
                this.auth.setUserIdInLocalStorage(decodedToken.sub)
            }
            return true;
        }
        this.auth.clearToken('all');
        this.router.navigate(['/identity/login']);
        return false;
    }

    canActiveChild
}