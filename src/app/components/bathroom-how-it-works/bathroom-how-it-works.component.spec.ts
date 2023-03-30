import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomHowItWorksComponent } from './bathroom-how-it-works.component';

describe('BathroomHowItWorksComponent', () => {
  let component: BathroomHowItWorksComponent;
  let fixture: ComponentFixture<BathroomHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomHowItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
