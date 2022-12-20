import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import { PopupService } from "src/app/core/services/pop-up.service";
import HttpResErrorModel from "src/app/shared/models/HttpResErrorModel";
import { LoginReqBody } from "src/app/shared/models/ReqBodyModel";
import input_pattern from "../../validators/input-pattern";

@Component({
    selector: 'app-identity-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    usernamePattern = input_pattern.usernamePattern;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private errorHandler: ErrorHandlerService,
        private popupService: PopupService
    ) {
        // const isTokenExpired = this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
		// if(!isTokenExpired) {
        //     this.router.navigateByUrl('/home');
        // }
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group<LoginReqBody>({
            username: '',
            password: ''
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
            const formValues = this.loginForm.value as LoginReqBody;
            this.auth.login(formValues).pipe(
                catchError(err => { throw err})
            ).subscribe({
                next: (data: any) => {
                    this.auth.setTokenInLocalStorage(data.id_token);
                    this.auth.setTokenInLocalStorage(data.id_token, "access_token");
                    this.popupService.popSuccess({ title: "Login Successful!", detail: "Welcome back, my friend!" });
                    this.router.navigateByUrl('/');
                    return;
                },
                error: (err) => {
                    const resError: HttpResErrorModel = err.error;
                    console.log(resError);
                    return;
                }
            })
        } else {
            this.errorHandler.invalidFormPU("Invalid form!");
        }
    }
}