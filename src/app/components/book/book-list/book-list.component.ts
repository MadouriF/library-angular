import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../../models/book';
import { MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { Router, RouterLink } from '@angular/router';
import { BookCardComponent } from '../book-card/book-card.component';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    MatCardHeader, 
    MatCardContent, 
    MatCardTitle, 
    MatCardSubtitle, 
    MatCardActions,
    CommonModule,
    MatCard, 
    MatIcon,
    BookDetailsComponent,
    RouterLink,
    BookCardComponent,
    MatButtonModule
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {

  books!: Book[];

  constructor (private bookService: BookService, private router: Router) { }

  ngOnInit(): void { 
    this.bookService
    .getAll()
    .subscribe({
      next: (res) => this.books = res,
      error: (err) => console.error('Something wrong occured' + err)
    });
  }

  onViewCreate() {
    this.router.navigateByUrl("book/create")
  }
}