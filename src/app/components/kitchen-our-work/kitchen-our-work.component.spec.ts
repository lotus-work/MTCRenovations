import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenOurWorkComponent } from './kitchen-our-work.component';

describe('KitchenOurWorkComponent', () => {
  let component: KitchenOurWorkComponent;
  let fixture: ComponentFixture<KitchenOurWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenOurWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenOurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
