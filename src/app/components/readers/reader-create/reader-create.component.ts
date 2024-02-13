import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReadersServiceService } from '../../../services/readers-service.service';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-reader-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatInputModule, MatFormFieldModule],
  templateUrl: './reader-create.component.html',
  styleUrl: './reader-create.component.css'
})
export class ReaderCreateComponent implements OnInit {
  readerForm! : FormGroup;
  addressForm! : FormGroup;


  constructor(private formBuilder : FormBuilder, private readerService : ReadersServiceService, private router : Router){}

  ngOnInit() {
    this.readerForm = this.formBuilder.group({
      lastName : [null, Validators.required],
      firstName : [null, Validators.required],
      mail : [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phoneNumber : [null, [Validators.required, Validators.pattern('^0[67][0-9]{8}$')]],
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

  onSubmit() : void {
    this.readerService.addReader(this.readerForm.value).subscribe();
    setTimeout(() => this.router.navigateByUrl('readers'), 2000 ); 
  }
}
