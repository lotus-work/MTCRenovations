import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringNavbarComponent } from './flooring-navbar.component';

describe('FlooringNavbarComponent', () => {
  let component: FlooringNavbarComponent;
  let fixture: ComponentFixture<FlooringNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
