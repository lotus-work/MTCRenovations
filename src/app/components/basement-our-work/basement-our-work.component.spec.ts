import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementOurWorkComponent } from './basement-our-work.component';

describe('BasementOurWorkComponent', () => {
  let component: BasementOurWorkComponent;
  let fixture: ComponentFixture<BasementOurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasementOurWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasementOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
