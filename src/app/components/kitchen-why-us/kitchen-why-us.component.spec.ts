import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenWhyUsComponent } from './kitchen-why-us.component';

describe('KitchenWhyUsComponent', () => {
  let component: KitchenWhyUsComponent;
  let fixture: ComponentFixture<KitchenWhyUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenWhyUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
