import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Writer } from '../models/writer';
import { Domain } from '../models/domain';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  url: string = 'https://localhost:7030/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Domain[]> {
    return this.http.get<Domain[]>(`${this.url}/domains`);
  }

  getById(id: number): Observable<Domain> {
    return this.http.get<Domain>(`${this.url}/domains/${id}`);
  }
}