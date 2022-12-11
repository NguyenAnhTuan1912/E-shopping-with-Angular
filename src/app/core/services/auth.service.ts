import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import environments from "src/environments/environments";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        const url = `${environments.serverOriginUrl}/auth/login`;
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        const body = JSON.stringify({
            username,
            password
        });
        return this.http.post<any>(url, body, { headers });
    }
}