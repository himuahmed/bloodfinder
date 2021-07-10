import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpCallInterceptor implements HttpInterceptor {

    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const myToken = localStorage.getItem('token');
        if(myToken){
            req = req.clone({
                setHeaders:{
                    Authorization: "Bearer " + myToken, 
                }
            })
        }
        return next.handle(req);
    }
}
