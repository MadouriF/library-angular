import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../../../models/loan';
import { Observable } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import {MatDatepickerIntl, MatDatepickerModule} from '@angular/material/datepicker';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import 'moment/locale/fr';
import {DateAdapter, MAT_DATE_LOCALE} from '@angular/material/core';
import { BookService } from '../../../services/book.service';
import { Book } from '../../../models/book';
import {MatSelectModule} from '@angular/material/select';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-update-loan',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, MatButtonModule, NgFor, ReactiveFormsModule, DatePipe, NgIf, MatDatepickerModule, AsyncPipe],
  providers : [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide : MAT_DATE_LOCALE, useValue : "fr-FR"},
    provideMomentDateAdapter(MY_FORMATS)
  ],
  templateUrl: './update-loan.component.html',
  styleUrl: './update-loan.component.css'
})

export class UpdateLoanComponent implements OnInit {
  
  loan! : Loan
  books$ : Observable<Book[]> = this._bookService.getAll()
  updateLoanForm! : FormGroup 
  id! : number
  startDate! : Date 
  endDate! : Date 
  mail! : string
  title! : string

  constructor(private _activatedRoute : ActivatedRoute, private _router : Router, private _loanService : LoanService, private _adapter: DateAdapter<any>,
    private _intl: MatDatepickerIntl, @Inject(MAT_DATE_LOCALE) private _locale: string, private _bookService : BookService){
    registerLocaleData(fr.default)
  }

  ngOnInit(): void {
    this._loanService.getLoanById(this._activatedRoute.snapshot.params['id'])
      .subscribe({
        next : (response : Loan) => {
          this.loan = response          
          this.updateLoanForm = new FormGroup({
            startDate : new FormControl(this.loan.startDate),
            endDate : new FormControl(this.loan.endDate),
            readerFirstName : new FormControl(this.loan.reader.firstName),
            readerLastName : new FormControl(this.loan.reader.lastName),
            readerMail : new FormControl(this.loan.reader.mail),
            bookTitle : new FormControl(this.loan.book.title),
        })
      },
        error : err => {
          console.log(err);
        }
      })
  }

  updateLoan(){
    if (this.updateLoanForm.value){    
      console.log(this.updateLoanForm.value.endDate.toDate());
      this.id = this._activatedRoute.snapshot.params['id']
      this.startDate = this.updateLoanForm.value.startDate
      this.endDate = this.updateLoanForm.value.endDate
      this.mail = this.updateLoanForm.value.readerMail
      this.title = this.updateLoanForm.value.bookTitle
      this._loanService.updateLoan(this.id, this.startDate, this.endDate, this.mail, this.title)
        .subscribe({
          next : () => {
            window.location.reload()
          },
          error : err => {
            console.log(err);
          }
        })
    }
  }

}

