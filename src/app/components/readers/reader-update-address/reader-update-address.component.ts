import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReadersServiceService } from '../../../services/readers-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Reader } from '../../../models/reader';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reader-update-address',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatInputModule, MatFormFieldModule],
  templateUrl: './reader-update-address.component.html',
  styleUrl: './reader-update-address.component.css'
})
export class ReaderUpdateAddressComponent implements OnInit{
  readerForm! : FormGroup;
  addressForm! : FormGroup;
  readerId! : number;
  reader$! : Observable<Reader>;

  constructor(private formBuilder : FormBuilder, private readerService : ReadersServiceService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.readerId = this.route.snapshot.params['id'];
    this.reader$ = this.readerService.getOneReader(this.readerId);


    this.readerForm = this.formBuilder.group({
      id : [this.readerId],
      lastName : [null],
      firstName : [null],
      mail : [null],
      phoneNumber : [null],
      address : this.addressForm = this.formBuilder.group({
          appartment : [null, Validators.required],
          street : [null, Validators.required],
          city : [null, Validators.required],
          zipCode : [null, Validators.required],
          country : [null, Validators.required]
      }),
  },
  {
      updateOn : 'blur'
  });
  }

  onChangingAddress() : void {
    this.readerService.updateReaderAddress(this.readerForm.value, this.readerId).subscribe();
    setTimeout(() => this.router.navigateByUrl(`readers/${this.readerId}`), 2000); 
}
}
