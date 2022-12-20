import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { catchError } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { ErrorHandlerService } from "src/app/core/services/error-handler.service";
import { PopupService } from "src/app/core/services/pop-up.service";
import HttpResErrorModel from "src/app/shared/models/HttpResErrorModel";
import { RegisterReqBody } from "src/app/shared/models/ReqBodyModel";
import checkConfirmPassword from "../../helpers/checkConfirmPassword";
import input_pattern from "../../validators/input-pattern";

@Component({
    selector: 'app-identity-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    usernamePattern = input_pattern.usernamePattern;
    emailPattern = input_pattern.emailPattern;
    alternamePattern = input_pattern.alternamePattern;
    jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
        private errorHandler: ErrorHandlerService,
        private popupService: PopupService
    ) {}

    ngOnInit(): void {
        this.registerForm = this.fb.group({
            username: '',
            email: '',
            passwordGroup: this.fb.group({
                password: '',
                confirmPassword: '',
            }),
            altername: ''
        });
        this.registerForm.controls['username'].setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5),
            Validators.pattern(this.usernamePattern)
        ]);
        this.registerForm.controls['email'].setValidators([
            Validators.required,
            Validators.pattern(this.emailPattern)
        ]);
        this.registerForm.controls['passwordGroup'].setValidators([checkConfirmPassword]);
        this.registerForm.get('passwordGroup.password').setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5)
        ]);
        this.registerForm.get('passwordGroup.confirmPassword').setValidators([
            Validators.required,
            Validators.maxLength(26),
            Validators.minLength(5)
        ]);
        this.registerForm.controls['altername'].setValidators([
            Validators.maxLength(26),
            Validators.minLength(5),
            Validators.pattern(this.alternamePattern)
        ]);
    }

    onFormSubmit(): void {
        if(this.registerForm.valid) {
            const formValues = this.registerForm.value;
            const rawBody: RegisterReqBody = {
                username: formValues.username,
                altername: formValues.altername,
                password: formValues.passwordGroup.password,
                confirmPassword: formValues.passwordGroup.confirmPassword,
                email: formValues.email
            };
            this.auth.register(rawBody).pipe(
                catchError(err => { throw err})
            ).subscribe({
                next: (data: any) => {
                    this.popupService.popSuccess({ title: 'Register Successful!', detail: 'Hello newcomer! Login to explore.' });
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