import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Viewcourse } from './viewcourse';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  readonly pro_url:string="http://localhost:8080/allCourse";
  status:boolean=false;
  errmsg:string="";
  couarr:Viewcourse[]=[];

  constructor(private http:HttpClient)
  {
    this.getAllCourse();
  }
  
  getAllCourse()
  {

    this.http.get<Viewcourse[]>(this.pro_url).
    subscribe(
      data=>
      {
        
        this.status=false;
        this.couarr=data;
      },
      error=>
      {
        alert("Error is running");
        this.status=false;
        this.errmsg="Data Not Found";
      }

    );
  }

}
