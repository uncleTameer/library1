import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-books-outlibrary',
  templateUrl: './books-outlibrary.component.html',
  styleUrls: ['./books-outlibrary.component.css'],
})
export class BooksOUTlibraryComponent {
  searchTerm: string = ''; 
  books: any[] = []; 

  constructor(private service: ServiceService) {}

  searchBooks(query: string) {
    if (!query.trim()) return; 

    this.service.searchBooks(query).subscribe(
      (data: any) => {
        this.books = data.items || []; 
        console.log(this.books);
      },
      (error) => {
        console.error('Search failed:', error); 
        this.books = []; 
      }
    );
  }
}
