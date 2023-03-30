import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringGetFreeQuoteComponent } from './flooring-get-free-quote.component';

describe('FlooringGetFreeQuoteComponent', () => {
  let component: FlooringGetFreeQuoteComponent;
  let fixture: ComponentFixture<FlooringGetFreeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringGetFreeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringGetFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
