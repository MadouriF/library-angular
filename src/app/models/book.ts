import { Domain } from "./domain"
import { Loan } from "./loan"
import { Writer } from "./writer"

export interface Book {
    id : number
    title : string
    description : string
    pagesNumber : number
    state : number
    writer: Writer | undefined;
    domain: Domain | undefined;
    loans : Loan[]
}
