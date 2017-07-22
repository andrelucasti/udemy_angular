import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

export class AppCodes {
    constructor(private router:Router){}


    controllerNavigationRedirect(pValue:string):boolean{
        console.log("AppCodes")
        if(pValue==="401"){
            console.log("unauthorized...")
            this.router.navigate(['/login'])

           return false;
        }

        if(pValue==="403"){
            console.log("Not permission access...")
            this.router.navigate(['/login'])

            return false;
        }
        
        if(pValue==="404"){
            console.log("error....")
            this.router.navigate(['/error'])

           return false;
        }

        return true;
    }
}