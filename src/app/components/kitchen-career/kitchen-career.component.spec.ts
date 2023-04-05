import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenCareerComponent } from './kitchen-career.component';

describe('KitchenCareerComponent', () => {
  let component: KitchenCareerComponent;
  let fixture: ComponentFixture<KitchenCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
