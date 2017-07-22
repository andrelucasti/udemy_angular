import { Response } from '@angular/http';
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { PATH_LOGIN, PATH_ERROR_SERVER } from "app/app.const";

export class ErrorHandler{

    static handleError(error: Response | any){
        let errorMsg: string
        console.log(error);
        if(error instanceof Response){
           errorMsg = `Erro ${error.status} access URL ${error.url} - ${error.statusText}`

           if(error.status === 0){
             errorMsg = "server disconected..."
             window.location.pathname = `${PATH_LOGIN}`
           }
        } else {
            errorMsg = error.toString()
        }
        console.log(errorMsg);
        return Observable.throw(errorMsg)
    }
}