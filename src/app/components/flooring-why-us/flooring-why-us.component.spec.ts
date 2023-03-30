import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringWhyUsComponent } from './flooring-why-us.component';

describe('FlooringWhyUsComponent', () => {
  let component: FlooringWhyUsComponent;
  let fixture: ComponentFixture<FlooringWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringWhyUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
