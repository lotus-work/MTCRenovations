import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomOurWorkComponent } from './bathroom-our-work.component';

describe('BathroomOurWorkComponent', () => {
  let component: BathroomOurWorkComponent;
  let fixture: ComponentFixture<BathroomOurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomOurWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
