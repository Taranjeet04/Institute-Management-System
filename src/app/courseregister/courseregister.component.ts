import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Courseregister } from './courseregister';

@Component({
  selector: 'app-courseregister',
  templateUrl: './courseregister.component.html',
  styleUrls: ['./courseregister.component.css']
})
export class CourseregisterComponent {

  readonly emp_URL:string="http://localhost:8080/addCourse";
  status:boolean=false;
  errmessage: string="";


  constructor(private http:HttpClient){

  }

  SaveCourse(mycou:NgForm)
  {
    console.log("adding Course");
    console.log("Before"+mycou.value);

    let newCou=mycou.value;
    console.log("After" +newCou.value)
    this.http.post<Courseregister>(this.emp_URL,newCou)
    .subscribe(
      
      data=>
      {
        alert("New Course Added");
       console.log("added"+data);
      },
      
      error=>
      {
        alert("Inside Error");
        console.log("error !!!" +error);
        this.errmessage="error occured during adding!!"
      }
    );
  }


}
