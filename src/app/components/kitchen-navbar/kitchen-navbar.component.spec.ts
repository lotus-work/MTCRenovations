import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenNavbarComponent } from './kitchen-navbar.component';

describe('KitchenNavbarComponent', () => {
  let component: KitchenNavbarComponent;
  let fixture: ComponentFixture<KitchenNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
