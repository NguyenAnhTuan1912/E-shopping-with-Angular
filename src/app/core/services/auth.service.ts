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
        const body = JSON.stringify({ email, origin: environments.appOriginUrl });
        return this.http.put(url, body, { headers });
    }

    resetPassword(passwordGroup: { password: string; confirmPassword: string }) {
        const url = `${environments.serverOriginUrl}/auth/reset-password`;
        const access_token = this.getTokenInLocalStorage("access_token");
        const sub = this.getUserIdInLocalStorage();
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': access_token
        });
        const body = JSON.stringify({
            sub,
            ...passwordGroup
        });
        return this.http.put(url, body, { headers });
    }

    clearToken(opt: string = "id_token") {
        switch(opt) {
            case "id_token": {
                localStorage.removeItem("id_token");
                return true;
            }
            case "access_token": {
                localStorage.removeItem("access_token");
                return true;
            }
            case "all": {
                localStorage.removeItem("id_token");
                localStorage.removeItem("access_token");
                return true;
            }
            default: return false;
        }
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