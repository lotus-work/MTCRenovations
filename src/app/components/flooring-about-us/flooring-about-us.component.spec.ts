import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringAboutUsComponent } from './flooring-about-us.component';

describe('FlooringAboutUsComponent', () => {
  let component: FlooringAboutUsComponent;
  let fixture: ComponentFixture<FlooringAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
