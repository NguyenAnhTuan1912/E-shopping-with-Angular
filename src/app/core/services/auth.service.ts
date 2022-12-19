import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import environments from "src/environments/environments";
import { LoginReqBody, RegisterReqBody } from "src/app/shared/models/ReqBodyModel";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    login(rawBody: LoginReqBody) {
        const url = `${environments.serverOriginUrl}/auth/login`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({
            username: rawBody.username,
            password: rawBody.password
        } as LoginReqBody);
        return this.http.post<any>(url, body, { headers });
    }

    register(rawBody: RegisterReqBody) {
        const url = `${environments.serverOriginUrl}/auth/register`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({
            username: rawBody.username,
            password: rawBody.password,
            email: rawBody.email,
            confirmPassword: rawBody.confirmPassword,
            altername: rawBody.altername
        } as RegisterReqBody);
        console.log(body);
        return this.http.post<any>(url, body, { headers });
    }

    forgotPassword(email: string) {
        const url = `${environments.serverOriginUrl}/auth/forgot-password`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({ email });
        return this.http.put(url, body, { headers });
    }

    resetPassword(passwordGroup: { password: string; confirmPassword: string }, token: string) {
        const url = `${environments.serverOriginUrl}/auth/reset-password`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const body = JSON.stringify(passwordGroup);
        return this.http.put(url, body, { headers });
    }

    logout() {
        this.clearDataInLocalStorage();
        this.clearDataInLocalStorage("access_token");
        this.clearDataInLocalStorage("id");
        window.location.reload();
    }

    clearDataInLocalStorage(type: string = "id_token") {
        localStorage.removeItem(type);
        return true;
    }

    clearAllToken() {
        this.clearDataInLocalStorage();
        this.clearDataInLocalStorage("access_token");
    }

    getTokenInLocalStorage(type: string = "id_token") {
        return localStorage.getItem(type);
    }

    setTokenInLocalStorage(value: string, type: string = "id_token") {
        localStorage.setItem(type, value);
        return true;
    }

    getUserIdInLocalStorage() {
        return localStorage.getItem("id") as string;
    }

    setUserIdInLocalStorage(id: string) {
        localStorage.setItem("id", id);
        return true;
    }
}