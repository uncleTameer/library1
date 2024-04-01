import { Component } from '@angular/core';
import { ServiceService } from '../service.service'; // Ensure the path is correct

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  bookName: string = '';
  author: string = '';
  tags: string = '';
  amount: string = '';

  constructor(private serviceService: ServiceService) {}

  checkBook = (): boolean => {
    // Checks if all fields are filled and amount is greater than 0
    return (
      this.bookName.trim() !== '' &&
      this.author.trim() !== '' &&
      this.tags.trim() !== '' &&
      parseFloat(this.amount) > 0
    );
  };

  submission = () => {
    if (this.checkBook()) {
      const book = {
        bookName: this.bookName,
        author: this.author,
        tags: this.tags,
        amount: parseFloat(this.amount),
      };
      this.serviceService.addBook(book); // Add the book to the service
      alert('Book added successfully');

      // Reset form fields
      this.bookName = '';
      this.author = '';
      this.tags = '';
      this.amount = '';
    } else {
      alert('Please fill out all required fields correctly.');
    }
  };
}
