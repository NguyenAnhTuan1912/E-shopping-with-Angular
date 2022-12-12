export class RegisterReqBody {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
    altername: string;
    
    constructor({
        username = '',
        password = '',
        confirmPassword = '',
        email = '',
        altername = ''
    } = {}) {
        this.username = username;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.email = email;
        this.altername = altername;
    }
}

export class LoginReqBody {
    username: string;
    password: string;

    constructor({
        username = '',
        password = ''
    } = {}) {
        this.username = username;
        this.password = password;
    };
}