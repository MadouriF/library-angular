import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateLoanComponent } from './components/loan/create-loan/create-loan.component';
import { LoansComponent } from './components/loan/loans/loans.component';
import { UpdateLoanComponent } from './components/loan/update-loan/update-loan.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { CreateBookComponent } from './components/book/create-book/create-book.component';
import { ReaderHomeComponent } from './components/readers/reader-home/reader-home.component';
import { ReaderDetailsComponent } from './components/readers/reader-details/reader-details.component';
import { ReaderDeleteComponent } from './components/readers/reader-delete/reader-delete.component';
import { ReaderCreateComponent } from './components/readers/reader-create/reader-create.component';
import { ReaderUpdateComponent } from './components/readers/reader-update/reader-update.component';
import { ReaderUpdateAddressComponent } from './components/readers/reader-update-address/reader-update-address.component';

export const routes: Routes = [
    {path : "", component: HomeComponent},
    {path : "loan", component : LoansComponent},
    {path : "loan/create", component : CreateLoanComponent},
    {path : "loan/update/:id", component : UpdateLoanComponent},
    { path: "books", component: BookListComponent },
    { path: "book/create", component: CreateBookComponent },
    {path : "readers", component : ReaderHomeComponent},
    {path : "readers/:id", component : ReaderDetailsComponent},
    {path : "readers/delete/:id", component : ReaderDeleteComponent},
    {path : "reader/create", component : ReaderCreateComponent},
    {path : "readers/update/:id/:idAddress", component : ReaderUpdateComponent},
    {path : 'readers/updateAddress/:id', component : ReaderUpdateAddressComponent}
];
