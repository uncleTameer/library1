import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  toggleActive(event: any) {
    const activeLinks = document.querySelectorAll('.navbar a.active');
    activeLinks.forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  }
}
