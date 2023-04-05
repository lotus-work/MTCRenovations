import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathroomCareerComponent } from './bathroom-career.component';

describe('BathroomCareerComponent', () => {
  let component: BathroomCareerComponent;
  let fixture: ComponentFixture<BathroomCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathroomCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathroomCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
