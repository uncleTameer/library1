import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-books-outlibrary',
  templateUrl: './books-outlibrary.component.html',
  styleUrls: ['./books-outlibrary.component.css'],
})
export class BooksOUTlibraryComponent {
  searchTerm: string = ''; // Model for the search input
  books: any[] = []; // Stores the books returned from the API

  constructor(private service: ServiceService) {}

  searchBooks(query: string) {
    if (!query.trim()) return; // Avoid searching for empty or whitespace-only strings

    this.service.searchBooks(query).subscribe(
      (data: any) => {
        this.books = data.items || []; // Handle cases where no items are returned
        console.log(this.books);
      },
      (error) => {
        console.error('Search failed:', error); // Log or handle errors appropriately
        this.books = []; // Reset the books on error or no data
      }
    );
  }
}
