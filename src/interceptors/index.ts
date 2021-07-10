import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpCallInterceptor } from "./httpCallInterceptor";


export const AllInterceptors = [
    {provide: HTTP_INTERCEPTORS, useClass: HttpCallInterceptor, multi: true}
]