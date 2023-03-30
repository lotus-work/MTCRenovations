import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringHowItWorksComponent } from './flooring-how-it-works.component';

describe('FlooringHowItWorksComponent', () => {
  let component: FlooringHowItWorksComponent;
  let fixture: ComponentFixture<FlooringHowItWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringHowItWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringHowItWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
