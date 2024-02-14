import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Reader } from '../../../models/reader';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ReadersServiceService } from '../../../services/readers-service.service';

@Component({
  selector: 'app-reader-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './reader-details.component.html',
  styleUrl: './reader-details.component.css'
})

export class ReaderDetailsComponent implements OnInit {

  readerId! : number;
  reader$! : Observable<Reader>

  constructor(private route : ActivatedRoute, private readersService : ReadersServiceService, private router : Router){}

  ngOnInit(): void {
    this.readerId = this.route.snapshot.params['id'];
    this.reader$ = this.readersService.getOneReader(this.readerId);
  }

  onBackToReaders() : void {
    this.router.navigateByUrl('readers');
  }

  onUpdateReaders(addressId : number) : void {
    this.router.navigateByUrl(`readers/update/${this.readerId}/${addressId}`)
  }

  onChangingAddress() :void {
    this.router.navigateByUrl(`readers/updateAddress/${this.readerId}`)
  }
}
