import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reader } from '../models/reader';

@Injectable({
  providedIn: 'root'
})
export class ReadersServiceService {
  baseUrl : string = 'https://localhost:7030/api'

  constructor(private http : HttpClient) { }

  public getAllReaders() : Observable<Reader[]>{
    return this.http.get<Reader[]>(`${this.baseUrl}/Readers`)
  }

  public getOneReader(id : number) : Observable<Reader>{
    return this.http.get<Reader>(`${this.baseUrl}/Readers/${id}`)
  }

  public deleteReader(id : number) : Observable<Reader>{
    return this.http.delete<Reader>(`${this.baseUrl}/Readers/${id}`)
  }

  public addReader(formValue : Reader): Observable<Reader> {
    return this.http.post<Reader>(`${this.baseUrl}/Readers`, formValue);
  } 

  public updateReader(formValue : Reader, id : number) : Observable<Reader> {
    return this.http.put<Reader>(`${this.baseUrl}/Readers/${id}`, formValue)
  }

  public updateReaderAddress(formValue : Reader, id : number) : Observable<Reader> {
    return this.http.put<Reader>(`${this.baseUrl}/Readers/Address/${id}`, formValue)
  }
}
