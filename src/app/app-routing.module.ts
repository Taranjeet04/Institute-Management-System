import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewenquiryComponent } from './viewenquiry/viewenquiry.component';
import { FacultyregisterComponent } from './facultyregister/facultyregister.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';
import { HomeComponent } from './home/home.component';
import { PlacementComponent } from './placement/placement.component';
import { CourseregisterComponent } from './courseregister/courseregister.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FsdComponent } from './fsd/fsd.component';
import { NetcourseComponent } from './netcourse/netcourse.component';
import { StudentpageComponent } from './studentpage/studentpage.component';

const routes: Routes = [
  // {path:"", component:NavComponent},
  {path:"home", component:HomeComponent},
  {path:"course", component:CourseComponent},
  {path:"login", component:LoginComponent},
  {path:"placement", component:PlacementComponent},
  {path:"about", component:AboutComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"fsd", component:FsdComponent},
  {path:"netcourse", component:NetcourseComponent},
  {path:"studentpage", component:StudentpageComponent},
  
  {path:"admin", component:AdminComponent,
  children:[
    {path:"register", component:RegisterComponent},
    {path:"viewstudent", component:ViewstudentComponent},
    {path:"viewenquiry", component:ViewenquiryComponent},
    {path:"facultyregister", component:FacultyregisterComponent},
    {path:"courseregister", component:CourseregisterComponent},
    {path:"viewfaculty", component:ViewfacultyComponent},
    {path:"viewcourse", component:ViewcourseComponent}
  ]
  },
  {path:"home",component:AppComponent},
  {path:"register",component:RegisterComponent},
  {path:"nav",component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
