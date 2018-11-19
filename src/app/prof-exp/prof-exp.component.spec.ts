import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExpComponent } from './prof-exp.component';

describe('ProfExpComponent', () => {
  let component: ProfExpComponent;
  let fixture: ComponentFixture<ProfExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
