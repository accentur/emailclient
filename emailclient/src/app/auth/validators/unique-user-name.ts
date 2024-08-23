import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, map, catchError, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})
export class UniqueUserName implements AsyncValidator {

    constructor(private serviceAuth: AuthService) { }

    validate = (control: AbstractControl): Observable<ValidationErrors | null> => {

        const { value } = control;
        return this.serviceAuth.checkUniqueUserName(value).pipe(

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
