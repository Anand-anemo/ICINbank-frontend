import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestChequeBookComponent } from './request-cheque-book.component';

describe('RequestChequeBookComponent', () => {
  let component: RequestChequeBookComponent;
  let fixture: ComponentFixture<RequestChequeBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestChequeBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestChequeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
