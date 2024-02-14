import { Domain } from "./domain";
import { Writer } from "./writer";

export interface Book {
    id: number;
    title: string;
    description: string;
    pagesNumber: number;
    state: number;
    writer: Writer | undefined;
    domain: Domain | undefined;
    //Loans: ;
  }
