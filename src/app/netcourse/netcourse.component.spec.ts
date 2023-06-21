import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetcourseComponent } from './netcourse.component';

describe('NetcourseComponent', () => {
  let component: NetcourseComponent;
  let fixture: ComponentFixture<NetcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NetcourseComponent]
    });
    fixture = TestBed.createComponent(NetcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
