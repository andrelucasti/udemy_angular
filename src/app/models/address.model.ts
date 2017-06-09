import { City } from "app/models/city.model";

export interface Address {

    id:             number
    numero:         number
   
    street:         string
    zipCode:        string
    complement:     string
    district:       string

    city:           City

    /*  "address": {
            "id": 3,
            "street": "rio pajeu ",
            "zipCode": "51230360",
            "number": 482,
            "complement": "aquele",
            "district": "Teste",
            "city": {
                "id": 87,
                "state": {
                    "id": 1,
                    "description": "Acre",
                    "uf": "AC"
                },
                "description": "Jordão"
            }

        */

    
}
