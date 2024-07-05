import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewleadintakeComponent } from './newleadintake.component';

describe('NewleadintakeComponent', () => {
  let component: NewleadintakeComponent;
  let fixture: ComponentFixture<NewleadintakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewleadintakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewleadintakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
