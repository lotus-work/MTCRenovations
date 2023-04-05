import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlooringCareerComponent } from './flooring-career.component';

describe('FlooringCareerComponent', () => {
  let component: FlooringCareerComponent;
  let fixture: ComponentFixture<FlooringCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlooringCareerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlooringCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
