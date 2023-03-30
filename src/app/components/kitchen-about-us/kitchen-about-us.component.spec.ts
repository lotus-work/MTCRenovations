import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenAboutUsComponent } from './kitchen-about-us.component';

describe('KitchenAboutUsComponent', () => {
  let component: KitchenAboutUsComponent;
  let fixture: ComponentFixture<KitchenAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
