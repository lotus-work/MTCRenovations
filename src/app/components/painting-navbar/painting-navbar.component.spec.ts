import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingNavbarComponent } from './painting-navbar.component';

describe('PaintingNavbarComponent', () => {
  let component: PaintingNavbarComponent;
  let fixture: ComponentFixture<PaintingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
