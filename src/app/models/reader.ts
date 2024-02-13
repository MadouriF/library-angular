import { Address } from "./address";

export interface Reader{
    id : number;
    lastName:string;
    firstName: string;
    mail: string;
    phoneNumber: string;
    password: string;
    address : Address;
    listLoans? : Array<string>;
}