import { Endereco } from './endereco.model'
import { DataTriagem } from "app/models/data-triagem.model";

export class Usuario {

    constructor(){}

    id:                     number
    nuProntuario:           number
    dataNascimento:         number
    
    nome:                   string
    nomeMae:                string
    nuCartSus:              string
    localEmArquivo:         string
    tipoDroga:              string
    nuTelefone:             string
    dataNascimentoTexto:    string
       
    endereco:               Endereco
    
    colecaoDataTriagem:     DataTriagem[]



    /* [
    {
        "id": 5,
        "nome": "Persisr",
        "nomeMae": "Flaviane",
        "nuProntuario": 1234566,
        "nuCartSus": "485 4748 7847 7847",
        "localEmArquivo": "J4",
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
        "dataNascimento": 1493866800000,
        "colecaoDataTriagem": [
            {
                "id": 1,
                "dataTriagemTexto": null,
                "dataTriagem": 1496113200000
            }
        ],
        "tipoDroga": "Alcool",
        "nuTelefone": "81995691694"
    },
    {
        "id": 6,
        "nome": "Teste2",
        "nomeMae": "Maria",
        "nuProntuario": 658747,
        "nuCartSus": "852 9632 7412 8524",
        "localEmArquivo": "J4",
        "endereco": {
            "id": 6,
            "rua": "rio das dores ",
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
        "dataNascimento": 1493866800000,
        "colecaoDataTriagem": [
            {
                "id": 2,
                "dataTriagemTexto": null,
                "dataTriagem": 1496113200000
            }
        ],
        "tipoDroga": "Alcool",
        "nuTelefone": "81995691694"
    },
    {
        "id": 7,
        "nome": "Teste3",
        "nomeMae": "fonseca",
        "nuProntuario": 658747,
        "nuCartSus": "852 9632 7412 8524",
        "localEmArquivo": "J4",
        "endereco": {
            "id": 7,
            "rua": "rio das dores ",
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
        "dataNascimento": 1493866800000,
        "colecaoDataTriagem": [
            {
                "id": 3,
                "dataTriagemTexto": null,
                "dataTriagem": 1496113200000
            }
        ],
        "tipoDroga": "Alcool",
        "nuTelefone": "81995691694"
    },
    {
        "id": 8,
        "nome": "Teste3",
        "nomeMae": "fonseca",
        "nuProntuario": 658747,
        "nuCartSus": "852 9632 7412 8524",
        "localEmArquivo": "J4",
        "endereco": {
            "id": 8,
            "rua": "rio das dores ",
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
        "dataNascimento": 1493866800000,
        "colecaoDataTriagem": [
            {
                "id": 4,
                "dataTriagemTexto": null,
                "dataTriagem": 1496113200000
            }
        ],
        "tipoDroga": "Alcool",
        "nuTelefone": "81995691694"
    }
]
       
     }*/

}