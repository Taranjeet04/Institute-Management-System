import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { WebsiteComponent } from './website/website.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { FacultyregisterComponent } from './facultyregister/facultyregister.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import { BatchComponent } from './batch/batch.component';
import { HomeComponent } from './home/home.component';
import { PlacementComponent } from './placement/placement.component';
import { CourseregisterComponent } from './courseregister/courseregister.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FsdComponent } from './fsd/fsd.component';
import { NetcourseComponent } from './netcourse/netcourse.component';
import { StudentpageComponent } from './studentpage/studentpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    WebsiteComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    ViewstudentComponent,
    ViewenquiryComponent,
    FacultyregisterComponent,
    ViewfacultyComponent,
    BatchComponent,
    HomeComponent,
    PlacementComponent,
    CourseregisterComponent,
    ViewcourseComponent,
    ContactusComponent,
    FsdComponent,
    NetcourseComponent,
    StudentpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
