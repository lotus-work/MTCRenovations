import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomNavbarComponent } from './bathroom-navbar.component';

describe('BathroomNavbarComponent', () => {
  let component: BathroomNavbarComponent;
  let fixture: ComponentFixture<BathroomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
