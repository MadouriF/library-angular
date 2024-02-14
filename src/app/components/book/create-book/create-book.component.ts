import { Component, OnInit, numberAttribute } from '@angular/core';
import { Book } from '../../../models/book';
import { FormGroup, FormsModule, FormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Writer } from '../../../models/writer';
import { WriterService } from '../../../services/writer.service';
import { DomainService } from '../../../services/domain.service';
import { CommonModule } from '@angular/common';
import { Domain } from '../../../models/domain';
import { BookService } from '../../../services/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit{
  books!: Book[];
  writers!: Writer[];
  domains!: Domain[];
  writer!: Writer | undefined;
  domain!: Domain | undefined;
  newBook!: Book;
  bookForm!: FormGroup;
  constructor (
    private bookService: BookService,
    private writerService: WriterService,
    private domainService: DomainService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.writerService
    .getAll()
    .subscribe({
      next: (res) => this.writers = res,
      error: (err) => console.error('Something wrong occured' + err)
    });
    this.domainService
    .getAll()
    .subscribe({
      next: (res) => this.domains = res,
      error: (err) => console.error('Something wrong occured' + err)
    });
    this.bookService
    .getAll()
    .subscribe({
      next: (res) => this.books = res,
      error: (err) => console.error('Something wrong occured' + err)
    });
    this.bookForm = this.formBuilder.group({
      title : [null, Validators.required],
      description : [null, Validators.required],
      pagesNumber : [null, Validators.required],
      state : [null, Validators.required],
      writer : [null, Validators.required],
      domain : [null, Validators.required]
    });
  }

  onSubmit() {

    this.bookForm.setValue({
      title: this.bookForm.get('title')?.value,
      description: this.bookForm.get('description')?.value,
      pagesNumber: this.bookForm.get('pagesNumber')?.value,
      state: Number(this.bookForm.get('state')?.value),
      writer: this.writers.find(elt => elt.id == this.bookForm.get('writer')?.value),
      domain: this.domains.find(elt => elt.id == this.bookForm.get('domain')?.value),
    })

    this.bookService
    .createBook(this.bookForm.value)
    .subscribe({
      next: () => { this.router.navigateByUrl('books') },
			error: (err) => { console.log(err); }
    });
  }

  onViewBooks() {
    this.router.navigateByUrl("books")
  }
}