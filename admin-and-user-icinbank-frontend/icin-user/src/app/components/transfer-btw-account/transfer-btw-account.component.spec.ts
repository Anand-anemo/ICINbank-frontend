import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBtwAccountComponent } from './transfer-btw-account.component';

describe('TransferBtwAccountComponent', () => {
  let component: TransferBtwAccountComponent;
  let fixture: ComponentFixture<TransferBtwAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferBtwAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferBtwAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
