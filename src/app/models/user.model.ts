import { State } from './state.model'
import { ScreeningDate } from "app/models/screening-date.model";
import { Address } from "app/models/address.model";

export class User {

    constructor(){
        
    }

    id:                     number
    nuProntuario:           number
    dateOfBirth :           number
    dateOfBirthText :       string
    
    
    name:                   string
    motherName:             string
    nuCartSus:              string
    fileLocal:              string
    drugType:               string
    phone:                  string
    
    address:                Address = new Address();
    
    screeningDate:          ScreeningDate[] = new Array<ScreeningDate>()
    screeningDt:            ScreeningDate = new ScreeningDate();




    /* [
    {
        "id": 3,
        "name": "Sergio Andrade",
        "motherName": "Flaviane",
        "nuProntuario": 1234566,
        "nuCartSus": "485 4748 7847 7847",
        "fileLocal": "J4",
        "address": {
            "id": 3,
            "street": "rio pajeu ",
            "zipCode": "51230360",
            "number": 482,
            "complement": "aquele",
            "district": "Teste",
            "city": {
                "id": 87,
                "description": "Jordão",
                "state": {
                    "id": 1,
                    "description": "Acre",
                    "uf": "AC"
                }
            }
        },
        "dateOfBirth": 1493866800000,
        "screeningDate": [
            {
                "id": 1,
                "date": 1493780400000
            }
        ],
        "drugType": "Viagra",
        "phone": "81995691694"
    },*/

}