import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasementOurProcessComponent } from './basement-our-process.component';

describe('BasementOurProcessComponent', () => {
  let component: BasementOurProcessComponent;
  let fixture: ComponentFixture<BasementOurProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasementOurProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasementOurProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
