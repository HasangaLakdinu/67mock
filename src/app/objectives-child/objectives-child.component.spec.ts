import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivesChildComponent } from './objectives-child.component';

describe('ObjectivesChildComponent', () => {
  let component: ObjectivesChildComponent;
  let fixture: ComponentFixture<ObjectivesChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectivesChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectivesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
