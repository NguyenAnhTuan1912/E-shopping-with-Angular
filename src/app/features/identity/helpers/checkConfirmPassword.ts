import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
* @description
* Compare password and re-entered password to confirm the password.
* @param {AbstractControl} group - Pass a field name in a user table.
* @return true if equal else false.
**/
const checkConfirmPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password: string = group.get("password").value;
    const confirmPassword: string = group.get("confirmPassword").value;
    return password === confirmPassword ? null : { notEqual: true };
}

export default checkConfirmPassword;