import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfacultyComponent } from './viewfaculty.component';

describe('ViewfacultyComponent', () => {
  let component: ViewfacultyComponent;
  let fixture: ComponentFixture<ViewfacultyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewfacultyComponent]
    });
    fixture = TestBed.createComponent(ViewfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
