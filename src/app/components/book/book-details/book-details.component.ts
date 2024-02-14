import { Component, Input } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    MatCard, 
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    CommonModule,
    MatCardActions,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {
  @Input() book!: Book;
  showDetails: boolean = false;

  constructor (private bookService: BookService) {}

  displayDetails() {
    this.showDetails = !this.showDetails;
  }
}
