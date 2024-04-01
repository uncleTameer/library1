import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOUTlibraryComponent } from './books-outlibrary.component';

describe('BooksOUTlibraryComponent', () => {
  let component: BooksOUTlibraryComponent;
  let fixture: ComponentFixture<BooksOUTlibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksOUTlibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksOUTlibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
