import { Component } from '@angular/core';
import { ServiceService } from '../service.service'; // Adjust the path as necessary

@Component({
  selector: 'app-settings',
  template: ` <button (click)="toggleDarkMode()">Toggle Dark Mode</button> `,
  styleUrls: ['./settings.component.css'], // If you have styles specific to this component
})
export class SettingsComponent {
  constructor(private serviceService: ServiceService) {}

  toggleDarkMode() {
    this.serviceService.toggleDarkMode();
  }
}
