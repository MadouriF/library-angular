import { Component, Input } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [
    MatCard, 
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    CommonModule,
    MatCardActions,
    MatButtonModule,
    MatIcon,
    BookDetailsComponent,
    RouterLink
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() book!: Book;

  constructor (private bookService: BookService) {}
}
