import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Book {
  bookName: string;
  author: string;
  tags: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable(); // For components to subscribe

  constructor(private http: HttpClient) {}

  addBook(book: Book) {
    const currentValue = this.booksSubject.value;
    this.booksSubject.next([...currentValue, book]); // Append the new book and emit the new value
  }
  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

  // The getBooks method might no longer be necessary if you're using the observable approach directly
  // But it's here if you need to fetch the current snapshot of books without subscribing
  getBooks = (): Book[] => {
    return this.booksSubject.value;
  };
  private API_URL = 'https://www.googleapis.com/books/v1/volumes';
  private API_KEY = '';

  searchBooks(query: string) {
    return this.http.get(`${this.API_URL}?q=${query}&key=${this.API_KEY}`);
  }
}
