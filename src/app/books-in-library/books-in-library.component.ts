import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService, Book } from '../service.service'; // Adjust the import path as necessary
@Component({
  selector: 'app-books-in-library',
  templateUrl: './books-in-library.component.html',
  styleUrls: ['./books-in-library.component.css'],
})
export class BooksInLibraryComponent implements OnInit {
  books: Book[] = [];
  private booksSub!: Subscription;

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.booksSub = this.serviceService.books$.subscribe((books) => {
      this.books = books;
    });
  }

  ngOnDestroy() {
    if (this.booksSub) {
      this.booksSub.unsubscribe(); // Prevent memory leaks
    }
  }
}
