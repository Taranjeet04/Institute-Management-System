import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent {

  readonly pro_url:string="http://localhost:8080/all";
  status:boolean=false;
  errmsg:string="";
  stdarr:Student[]=[];

  constructor(private http:HttpClient)
  {
    this.getAllStudent();
  }
  
  getAllStudent()
  {
    this.http.get<Student[]>(this.pro_url).
    subscribe(
      data=>
      {
        this.status=false;
        this.stdarr=data;
      },
      error=>
      {
        this.status=false;
        this.errmsg="Data Not Found";
      }

    );
  }

}
