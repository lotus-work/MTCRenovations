import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingGetFreeQuoteComponent } from './painting-get-free-quote.component';

describe('PaintingGetFreeQuoteComponent', () => {
  let component: PaintingGetFreeQuoteComponent;
  let fixture: ComponentFixture<PaintingGetFreeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingGetFreeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingGetFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
