import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import { ActivatedRoute } from '@angular/router';
import { Loan } from '../../../models/loan';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@Component({
  selector: 'app-update-loan',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, ReactiveFormsModule, DatePipe],
  providers : [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  templateUrl: './update-loan.component.html',
  styleUrl: './update-loan.component.css'
})

export class UpdateLoanComponent implements OnInit {
  
  loan! : Loan 
  updateLoanForm = new FormGroup ({
    startDate : new FormControl(''),
    endDate : new FormControl(''),
    readerFirstName : new FormControl(''),
    readerLastName : new FormControl(''),
    readerMail : new FormControl(''),
    readerPhone : new FormControl(''),
    bookTitle : new FormControl(''),
  })

  constructor(private _activatedRoute : ActivatedRoute, private _loanService : LoanService){}

  ngOnInit(): void {
    this._loanService.getLoanById(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next : (response : Loan) => {
          this.loan = response
        },
        error : err => {
          console.log(err);
        }
      })
  }

  updateLoan(){

  }
}
