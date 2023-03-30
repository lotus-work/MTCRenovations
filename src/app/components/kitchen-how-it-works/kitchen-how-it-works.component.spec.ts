import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenHowItWorksComponent } from './kitchen-how-it-works.component';

describe('KitchenHowItWorksComponent', () => {
  let component: KitchenHowItWorksComponent;
  let fixture: ComponentFixture<KitchenHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenHowItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
