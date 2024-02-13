import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { ReadersServiceService } from '../../../services/readers-service.service';
import { ReaderDetailsComponent } from "../reader-details/reader-details.component";


@Component({
    selector: 'app-reader-delete',
    standalone: true,
    templateUrl: './reader-delete.component.html',
    styleUrl: './reader-delete.component.css',
    imports: [MatCardModule, MatButtonModule, CommonModule, ReaderDetailsComponent, ]
})

export class ReaderDeleteComponent {

  readerId : number = this.route.snapshot.params['id'];

  constructor(private route : ActivatedRoute, private router : Router, private readerService : ReadersServiceService){}

  onValidate() : void {
    this.readerService.deleteReader(this.readerId).subscribe();
    setTimeout( () => this.onBackToReaders(), 2000)
  }

  onBackToReaders() : void {
    this.router.navigateByUrl(`readers`)
  }
}

