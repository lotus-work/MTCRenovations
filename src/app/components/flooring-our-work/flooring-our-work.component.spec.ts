import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringOurWorkComponent } from './flooring-our-work.component';

describe('FlooringOurWorkComponent', () => {
  let component: FlooringOurWorkComponent;
  let fixture: ComponentFixture<FlooringOurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringOurWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
