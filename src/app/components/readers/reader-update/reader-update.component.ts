import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReadersServiceService } from '../../../services/readers-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { Reader } from '../../../models/reader';

@Component({
    selector: 'app-reader-update',
    standalone: true,
    templateUrl: './reader-update.component.html',
    styleUrl: './reader-update.component.css',
    imports: [ReactiveFormsModule, CommonModule, MatCardModule, MatInputModule, MatFormFieldModule]
})
export class ReaderUpdateComponent implements OnInit {
    readerForm! : FormGroup;
    addressForm! : FormGroup;
    readerId! : number;
    addressId! : number;
    reader$! : Observable<Reader>


    constructor(private formBuilder : FormBuilder, private readerService : ReadersServiceService, private route : ActivatedRoute, private router : Router){}

    ngOnInit() {

        this.readerId = this.route.snapshot.params['id'];
        this.addressId = this.route.snapshot.params['idAddress']

        this.reader$ = this.readerService.getOneReader(this.readerId)

            this.readerForm = this.formBuilder.group({
            id : [this.readerId],
            lastName : [null, Validators.required],
            firstName : [null, Validators.required],
            mail : [null, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            phoneNumber : [null, [Validators.required, Validators.pattern('^0[67][0-9]{8}$')]],
            address : this.addressForm = this.formBuilder.group({
                id : [this.addressId],
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
    
    onUpdate() : void {
        this.readerService.updateReader(this.readerForm.value, this.readerId).subscribe();
        setTimeout(() => this.router.navigateByUrl(`readers/${this.readerId}`), 2000); 
    }
}
