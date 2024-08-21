import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UniqueUserName implements AsyncValidator {

    constructor(private http: HttpClient) { }

    validate = (control: AbstractControl): Observable<ValidationErrors | null> => {

        const { value } = control;
        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        }).pipe(

            map((response) => {
                console.log(response);
                    return null;
            
            }),

            catchError((err) => {
                console.log(err);
                if (err.error.username) {
                    return of({ nonUniqueName: true });
                } else {
                    return of({ noNetwork: true });
                }
                
            })

        );
    };
}
