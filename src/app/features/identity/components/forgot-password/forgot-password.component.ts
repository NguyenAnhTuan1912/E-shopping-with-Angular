import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import HttpResErrorModel from "src/app/shared/models/HttpResErrorModel";
import { RegisterReqBody } from "src/app/shared/models/ReqBodyModel";
import input_pattern from "../../validators/input-pattern";

@Component({
    selector: 'app-identity-forgotpassword',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    emailPattern = input_pattern.emailPattern;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private errorHandler: ErrorHandlerService
    ) {}

    ngOnInit(): void {
        this.forgotPasswordForm = this.fb.group({
            email: ''
        });
        this.forgotPasswordForm.get('email').setValidators([
            Validators.required,
            Validators.pattern(this.emailPattern)
        ]);
    }

    onFormSubmit(): void {
        if(this.forgotPasswordForm.valid) {
            const formValues = this.forgotPasswordForm.value;
            const rawBody: string = formValues.email;
            this.auth.forgotPassword(rawBody).pipe(
                catchError(err => { throw err})
            ).subscribe({
                next: (data: any) => {
                    console.log(data);
                    this.auth.setTokenInLocalStorage(data.recover_token, "recover_token");
                    this.router.navigateByUrl('/identity/reset-password');
                    return;
                },
                error: (err) => {
                    const resError: HttpResErrorModel = err;
                    this.errorHandler.invalidFormPU("Invalid form! Please fill out again.");
                    return;
                }
            })
        } else {
            this.errorHandler.invalidFormPU("Invalid form! Please fill out again.");
        }
    }
}