import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementGetFreeQuoteComponent } from './basement-get-free-quote.component';

describe('BasementGetFreeQuoteComponent', () => {
  let component: BasementGetFreeQuoteComponent;
  let fixture: ComponentFixture<BasementGetFreeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasementGetFreeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasementGetFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
