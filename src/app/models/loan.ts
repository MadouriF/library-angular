import { Book } from "./book"
import { Reader } from "./reader"

export interface Loan {
    id : number
    startDate : Date
    endDate : Date
    reader : Reader 
    book : Book
}
