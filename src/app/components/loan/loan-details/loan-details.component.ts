import { Component, LOCALE_ID, Input } from '@angular/core';
import { Loan } from '../../../models/loan';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { MatCardModule } from '@angular/material/card';
import { UpdateLoanComponent } from '../update-loan/update-loan.component';
import { Router} from '@angular/router';
import { LoanService } from '../../../services/loan/loan.service';

@Component({
  selector: 'app-loan-details',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, DatePipe, MatCardModule, UpdateLoanComponent],
  providers : [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  templateUrl: './loan-details.component.html',
  styleUrl: './loan-details.component.css'
})
export class LoanDetailsComponent {

  @Input() loan! : Loan
  collapseDetails : boolean = false

  constructor(private _router : Router, private _loanService : LoanService){
    registerLocaleData(fr.default)
  }

  show() {
    this.collapseDetails = !this.collapseDetails
  }

  update(id : number){
    this._router.navigate(['loan/update/'+id])
  }

  endLoan(){
    this._loanService.endLoan(this.loan).subscribe({
      next : (response : any) => {
        if (response.status == 202){
          location.reload()
        }
      },
      error : err => {
        console.log(err);
        
      }
    })
  }

}
