import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerListComponent } from './caller-list.component';

describe('CallerListComponent', () => {
  let component: CallerListComponent;
  let fixture: ComponentFixture<CallerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
