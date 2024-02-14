import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Reader } from '../../../models/reader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reader-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
  templateUrl: './reader-card.component.html',
  styleUrl: './reader-card.component.css'
})
export class ReaderCardComponent {

  @Input() readerCard! : Reader;

  constructor(private router : Router){}

  onDetailsReader() : void {
    this.router.navigateByUrl(`readers/${this.readerCard.id}`)
  }

  onDeleteReader() : void {
    this.router.navigateByUrl(`readers/delete/${this.readerCard.id}`)
  }

}
