import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-books-outlibrary',
  templateUrl: './books-outlibrary.component.html',
  styleUrl: './books-outlibrary.component.css',
})
export class BooksOUTlibraryComponent {
  constructor(private service: ServiceService) {}
  books: any[] = []; // This will store the books returned from the API

  searchBooks(query: string) {
    this.service.searchBooks(query).subscribe((data: any) => {
      this.books = data.items; // Assuming the API returns an object with an 'items' array
      console.log(this.books);
    });
  }
}
