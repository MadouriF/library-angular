import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';

export const routes: Routes = [
    { path : "", component: HomeComponent },
    { path: "books", component: BookListComponent },
    { path: "book/create", component: CreateBookComponent }
];
