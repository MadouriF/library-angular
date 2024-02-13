import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import { Loan } from '../../../models/loan';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LoanDetailsComponent } from '../loan-details/loan-details.component';
import { UpdateLoanComponent } from '../update-loan/update-loan.component';
import { RouterLink } from '@angular/router';
import { CreateLoanComponent } from '../create-loan/create-loan.component';

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, MatListModule, DatePipe, LoanDetailsComponent, MatCardModule, RouterLink, CreateLoanComponent],
  providers : [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.css'
})
export class LoansComponent{

  loans$ : Observable<Loan[]> = this._loanService.getLoans();

  constructor(private _loanService : LoanService){
    registerLocaleData(fr.default)
  }

}
