import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../../models/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  url : string = "https://localhost:7030/api/loans"

  constructor(private _http : HttpClient) { }

  getLoans() : Observable<Loan[]>{
    return this._http.get<Loan[]>(this.url);
  }

  getLoanById(id : number) : Observable<Loan>{
    return this._http.get<Loan>(`${this.url}/${id}`);
  }

  createLoan(startDate : Date, mail : string, title : string) : Observable<any>{
    let body = {
      startDate : startDate,
      mail : mail,
      title : title
    }
    return this._http.post(this.url, body)
  }

  endLoan(loan : Loan){
    return this._http.put(`${this.url}/end/${loan.id}`, loan)
  }

  updateLoan(id :number, startDate : Date, endDate : Date, mail : string, title : string): Observable<any>{
    let body = {
      id : id,
      startDate : startDate,
      endDate : endDate,
      mail : mail,
      title : title
    }
    return this._http.put(`${this.url}/${id}`, body)
  }

  getCurrentLoans() : Observable<Loan[]> {
    return this._http.get<Loan[]>(this.url+"/current");
  }

  getFinishedLoans() : Observable<Loan[]> {
    return this._http.get<Loan[]>(this.url+"/finished");
  }
  
}
