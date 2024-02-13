import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateLoanComponent } from './components/loan/create-loan/create-loan.component';
import { LoansComponent } from './components/loan/loans/loans.component';
import { UpdateLoanComponent } from './components/loan/update-loan/update-loan.component';

export const routes: Routes = [
    {path : "", component: HomeComponent},
    {path : "loan", component : LoansComponent},
    {path : "loan/create", component : CreateLoanComponent},
    {path : "loan/update/:id", component : UpdateLoanComponent}    
];
