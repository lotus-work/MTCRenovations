import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomGetFreeQuoteComponent } from './bathroom-get-free-quote.component';

describe('BathroomGetFreeQuoteComponent', () => {
  let component: BathroomGetFreeQuoteComponent;
  let fixture: ComponentFixture<BathroomGetFreeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomGetFreeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomGetFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
