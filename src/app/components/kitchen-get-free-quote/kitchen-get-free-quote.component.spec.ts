import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenGetFreeQuoteComponent } from './kitchen-get-free-quote.component';

describe('KitchenGetFreeQuoteComponent', () => {
  let component: KitchenGetFreeQuoteComponent;
  let fixture: ComponentFixture<KitchenGetFreeQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenGetFreeQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenGetFreeQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
