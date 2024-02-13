import { Address } from "./address"
import { Loan } from "./loan"

export interface Reader {
    id : number
    lastName : string
    firstName : string
    mail : string
    phoneNumber : string
    password : string
    address : Address
    loans : Loan[]
}