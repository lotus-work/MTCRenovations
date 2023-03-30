import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomAboutUsComponent } from './bathroom-about-us.component';

describe('BathroomAboutUsComponent', () => {
  let component: BathroomAboutUsComponent;
  let fixture: ComponentFixture<BathroomAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
