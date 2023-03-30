import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingAboutUsComponent } from './painting-about-us.component';

describe('PaintingAboutUsComponent', () => {
  let component: PaintingAboutUsComponent;
  let fixture: ComponentFixture<PaintingAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
