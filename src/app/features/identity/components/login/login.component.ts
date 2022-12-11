import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
    selector: 'app-identity-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    usernamePattern: RegExp = /(^[a-zA-Z_]+[a-zA-Z_.]+[a-zA-Z0-9_]+$)|(^[a-zA-Z_]+[a-zA-Z_.]+[0-9]+$)/;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router
    ) {
        // const isTokenExpired = this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
		// if(!isTokenExpired) {
        //     this.router.navigateByUrl('/home');
        // }
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: [''],
            password: ['']
        });
        this.loginForm.controls['username'].setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5),
            Validators.pattern(this.usernamePattern)
        ]);
        this.loginForm.controls['password'].setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5)
        ]);
    }

    onFormSubmit(): void {
        if(this.loginForm.valid) {
            const value = this.loginForm.value;
            this.auth.login(value.username, value.password).pipe(
                catchError(err => { throw err})
            ).subscribe({
                next: (data: any) => {
                    localStorage.setItem("token", data.token);
                    this.router.navigateByUrl('/').then(() => {
                        window.location.reload();
                    });
                    return;
                },
                error: (err) => {
                    console.log(err);
                    return;
                }
            })
        }
    }
}