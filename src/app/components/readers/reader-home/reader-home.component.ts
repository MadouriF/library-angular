import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Reader } from '../../../models/reader';
import { ReadersServiceService } from '../../../services/readers-service.service';
import { CommonModule } from '@angular/common';
import { ReaderCardComponent } from "../reader-card/reader-card.component";
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-reader-home',
    standalone: true,
    templateUrl: './reader-home.component.html',
    styleUrl: './reader-home.component.css',
    imports: [CommonModule, ReaderCardComponent, MatButtonModule]
})
export class ReaderHomeComponent implements OnInit{

readersList$! : Observable<Reader[]>

constructor(private readersService : ReadersServiceService, private router : Router){}

  ngOnInit(): void {
    this.readersList$ = this.readersService.getAllReaders();
  }

  onCreateReader() : void {
    this.router.navigateByUrl('reader/create')
  }
}
