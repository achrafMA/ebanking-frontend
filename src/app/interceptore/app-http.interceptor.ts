import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private  authService : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("*****")
    console.log(request.url);
    if (request.url.includes("/auth/login")){
      let  req = request.clone({
        headers : request.headers.set('Authorization'.'bearer'+this.authService.accessToken)
    })
      return next.handle(request);
    }else request next.handle(request);

  }
}
