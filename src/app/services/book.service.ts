import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = 'https://localhost:7030/api';
  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/books`);
  }

  getById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/books/${id}`);
  }

  createBook(formValue: Book): Observable<any> {
    return this.http.post<Book>(`${this.url}/books`, formValue);
  }
}