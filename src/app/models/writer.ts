import { Book } from "./book"

export interface Writer {
    id : number
    lastName : string
    firstName : string
    mail : string
    phoneNumber : string
    rank : string
    books : Book[] 
}
