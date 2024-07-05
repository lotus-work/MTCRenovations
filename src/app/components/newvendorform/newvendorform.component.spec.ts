import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvendorformComponent } from './newvendorform.component';

describe('NewvendorformComponent', () => {
  let component: NewvendorformComponent;
  let fixture: ComponentFixture<NewvendorformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvendorformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewvendorformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
