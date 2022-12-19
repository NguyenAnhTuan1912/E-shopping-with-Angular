import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { finalize, Observable, tap } from "rxjs";

import HttpResErrorModel from "src/app/shared/models/HttpResErrorModel";
import { PopupService } from "../../services/pop-up.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private popupService: PopupService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            finalize(() => console.log("Request done!")),
            tap({
                error: err => {
                    const resError: HttpResErrorModel = err.error;
                    this.popupService.popError({ title: resError.title, detail: resError.detail });
                    console.log(resError);
                    return;
                }
            })
        );
    }
}