import { Injectable } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from "@angular/common/http";
import { filter, tap } from "rxjs/operators";

import { Observable } from "rxjs";

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const modifiedreq = req.clone({
            withCredentials:true
        });
       
        return next.handle(modifiedreq).pipe( // Handling Http reponse.
            
            filter(val=>val.type===HttpEventType.Sent),

            tap((val)=> {
                
                if (val.type === HttpEventType.Sent) {
                    
                    console.log('Request sent');
                }

                 if (val.type === HttpEventType.Response) {
                    
                      console.log('Response from API',val);
                }

            })
        );
    }




}
