import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingCareerComponent } from './painting-career.component';

describe('PaintingCareerComponent', () => {
  let component: PaintingCareerComponent;
  let fixture: ComponentFixture<PaintingCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
