import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingHowItWorksComponent } from './painting-how-it-works.component';

describe('PaintingHowItWorksComponent', () => {
  let component: PaintingHowItWorksComponent;
  let fixture: ComponentFixture<PaintingHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingHowItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
