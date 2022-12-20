import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError, Subscription } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import { PopupService } from "src/app/core/services/pop-up.service";
import HttpResErrorModel from "src/app/shared/models/HttpResErrorModel";
import { RegisterReqBody } from "src/app/shared/models/ReqBodyModel";
import checkConfirmPassword from "../../helpers/checkConfirmPassword";
import input_pattern from "../../validators/input-pattern";

@Component({
    selector: 'app-identity-resetpassword',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm: FormGroup;
    reset_token: string;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private route: ActivatedRoute,
        private errorHandler: ErrorHandlerService,
        private popupService: PopupService
    ) {
        const jwtHelper = new JwtHelperService();
        this.reset_token = this.route.snapshot.params["token"];
        if(!this.reset_token || jwtHelper.isTokenExpired(this.reset_token)) {
            this.router.navigateByUrl("/identity");
        }
    }

    ngOnInit(): void {
        this.resetPasswordForm = this.fb.group({
            password: '',
            confirmPassword: ''
        });
        this.resetPasswordForm.setValidators([checkConfirmPassword]);
        this.resetPasswordForm.get('password').setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5)
        ]);
        this.resetPasswordForm.get('confirmPassword').setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5)
        ]);
    }

    onFormSubmit(): void {
        if(this.resetPasswordForm.valid) {
            const formValues = this.resetPasswordForm.value;
            const rawBody: any = {
                password: formValues.password,
                confirmPassword: formValues.confirmPassword
            };
            this.auth.resetPassword(rawBody, this.reset_token).pipe(
                catchError(err => { throw err})
            ).subscribe({
                next: (data: any) => {
                    console.log(data);
                    this.popupService.popSuccess({ title: 'Change Password Successful!', detail: 'Now, login again to see magic :)' });
                    this.router.navigateByUrl('/identity/login');
                    return;
                },
                error: (err) => {
                    const resError: HttpResErrorModel = err.error;
                    console.log(resError);
                    return;
                }
            })
        } else {
            this.errorHandler.invalidFormPU("Invalid form! Please fill out again.");
        }
    }
}