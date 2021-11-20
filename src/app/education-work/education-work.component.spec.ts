import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EducationWorkComponent } from './education-work.component';

describe('EducationWorkComponent', () => {
  let component: EducationWorkComponent;
  let fixture: ComponentFixture<EducationWorkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
