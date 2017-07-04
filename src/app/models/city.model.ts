import { State } from "app/models/state.model";

export class City {
    
    constructor(){
        
    }
   
    id:            number

    description:   string

    state:          State = new State()

     /*   "city": {
                "id": 87,
                "description": "Jordão",
                "state": {
                    "id": 1,
                    "description": "Acre",
                    "uf": "AC"
                }
            }*/


}
