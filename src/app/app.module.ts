import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { BooksInLibraryComponent } from './books-in-library/books-in-library.component';
import { SettingsComponent } from './settings/settings.component';
import { BooksOUTlibraryComponent } from './books-outlibrary/books-outlibrary.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CheckoutComponent,
    BooksInLibraryComponent,
    SettingsComponent,
    BooksOUTlibraryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
