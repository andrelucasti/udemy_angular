import { Cidade } from "app/models/cidade.model";

export interface Endereco {

    id:             number
    numero:         number
   
    rua:            string
    cep:            string
    complemento:    string
    bairro:         string

    cidade:         Cidade

    /* [
        "endereco": {
            "id": 5,
            "rua": "rio pajeu ",
            "cep": "51230360",
            "numero": 482,
            "complemento": "aquele",
            "bairro": "Teste",
            "cidade": {
                "id": 87,
                "estado": {
                    "id": 1,
                    "uf": "AC",
                    "nome": "Acre"
                },
                "nome": "Jordão"
            }
        },

        */

    
}
