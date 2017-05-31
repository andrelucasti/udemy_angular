import { Estado } from "app/models/estado.model";

export interface Cidade {


    id:     number

    nome:   string

    estado: Estado

     /*   "cidade": {
                "id": 87,
                "estado": {
                    "id": 1,
                    "uf": "AC",
                    "nome": "Acre"
                },
                "nome": "Jordão"
            }*/


}
