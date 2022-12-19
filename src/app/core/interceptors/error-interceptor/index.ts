import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ErrorInterceptor } from "./error-interceptor";

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
}