import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingWhyUsComponent } from './painting-why-us.component';

describe('PaintingWhyUsComponent', () => {
  let component: PaintingWhyUsComponent;
  let fixture: ComponentFixture<PaintingWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingWhyUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
