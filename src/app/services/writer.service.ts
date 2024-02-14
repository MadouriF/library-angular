import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Writer } from '../models/writer';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  url: string = 'https://localhost:7030/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Writer[]> {
    return this.http.get<Writer[]>(`${this.url}/writer`);
  }

  getById(id: number): Observable<Writer> {
    return this.http.get<Writer>(`${this.url}/writer/${id}`);
  }
}