import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SessionService } from "./session.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private sessionService: SessionService) { }
  
    intercept(
      request: HttpRequest<any>, 
      next: HttpHandler): Observable<HttpEvent<any>> {
      
        const token = this.sessionService.getToken();
  
        if(token != ""){
          const cloneRequest = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
            }
          });
  
          return next.handle(cloneRequest);
        }
  
        return next.handle(request);
    }
}
