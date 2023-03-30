import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingOurWorkComponent } from './painting-our-work.component';

describe('PaintingOurWorkComponent', () => {
  let component: PaintingOurWorkComponent;
  let fixture: ComponentFixture<PaintingOurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingOurWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
