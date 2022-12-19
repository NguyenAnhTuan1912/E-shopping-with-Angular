import environments from "src/environments/environments";

export default class UserModel {
    id: string;
    username: string;
    altername: string;
    password: string;
    confirmPassword: string;
    email: string;
    appOrigin: string = environments.appOriginUrl;

    constructor({
        id = '',
        username = '',
        altername = '',
        password = '',
        confirmPassword = '',
        email = ''
    } = {}) {
        this.id = id;
        this.username = username;
        this.altername = altername;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.email = email;
    }
}