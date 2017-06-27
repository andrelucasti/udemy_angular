import { User } from "app/models/user.model";
import { Address } from "app/models/address.model";
import { ScreeningDate } from "app/models/screening-date.model";

export class UserImpl implements User{

    constructor(){
        
    }

    id: number;
    nuProntuario: number;
    dateOfBirth: number;
    name: string;
    motherName: string;
    nuCartSus: string;
    fileLocal: string;
    drugType: string;
    phone: string;
    address: Address;
    screeningDate: ScreeningDate[];

}