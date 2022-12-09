import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const token = localStorage.getItem('token');
        const jwtHelper = new JwtHelperService();
        const decodedToken = jwtHelper.decodeToken(token);
        if(token !== null || token !== undefined  && !jwtHelper.isTokenExpired(token)) {
            // let roles = route.data['permittedRoles'] as Array<string>;
            return true;
        }
        this.router.navigate(['/identity/login']);
        return false;
    }
}