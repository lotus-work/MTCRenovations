import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomWhyUsComponent } from './bathroom-why-us.component';

describe('BathroomWhyUsComponent', () => {
  let component: BathroomWhyUsComponent;
  let fixture: ComponentFixture<BathroomWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomWhyUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
