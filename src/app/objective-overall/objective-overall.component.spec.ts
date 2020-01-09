import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveOverallComponent } from './objective-overall.component';

describe('ObjectiveOverallComponent', () => {
  let component: ObjectiveOverallComponent;
  let fixture: ComponentFixture<ObjectiveOverallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectiveOverallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
