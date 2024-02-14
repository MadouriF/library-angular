import { Component } from '@angular/core';
import { LoanService } from '../../../services/loan/loan.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Book } from '../../../models/book';
import { Observable } from 'rxjs';
import { BookService } from '../../../services/book/book.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-create-loan',
  standalone: true,
  imports: [AsyncPipe, MatInputModule, NgIf, NgFor, MatFormFieldModule, FormsModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './create-loan.component.html',
  styleUrl: './create-loan.component.css'
})
export class CreateLoanComponent {

  startDate! : Date
  books$ : Observable<Book[]> = this._bookService.getAll()
  loanForm = new FormGroup({
    mail : new FormControl(''),
    title : new FormControl('')
  })

  constructor(private _loanService : LoanService, private _bookService : BookService){}

  createLoan(){
    let p = document.getElementById("message")

    if (this.loanForm.value.mail && this.loanForm.value.title){
      this.startDate = new Date(Date.now());

      this._loanService.createLoan(this.startDate, this.loanForm.value.mail, this.loanForm.value.title)
        .subscribe({
          next : (response : any) => {
              if (p){
                p.innerHTML = "Demande d'emprunt confirmée!"
              }
          },
          error : err => {
            if (p){
              p.innerHTML = "La demande d'emprunt a échoué !"
            }
          } 
      })
    }
  }

}
