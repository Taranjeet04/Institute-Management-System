import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyregisterComponent } from './facultyregister.component';

describe('FacultyregisterComponent', () => {
  let component: FacultyregisterComponent;
  let fixture: ComponentFixture<FacultyregisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacultyregisterComponent]
    });
    fixture = TestBed.createComponent(FacultyregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
