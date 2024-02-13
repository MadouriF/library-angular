import { Reader } from "./reader"

export interface Address {
    id : number
    appartment : string
    street : string
    city : string
    zipCode : string
    country : string
    readers : Reader[]
}