import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacultyRegister } from './facultyregister';

@Component({
  selector: 'app-facultyregister',
  templateUrl: './facultyregister.component.html',
  styleUrls: ['./facultyregister.component.css']
})
export class FacultyregisterComponent 
{
  readonly emp_URL:string="http://localhost:8080/addFaculty";
  status:boolean=false;
  errmessage: string="";


  constructor(private http:HttpClient){

  }

  SaveFaculty(myFct:NgForm)
  {
    console.log("adding Faculty");
    console.log("Before"+myFct.value);

    let newFct=myFct.value;
    console.log("After" +newFct.value)
    this.http.post<FacultyRegister>(this.emp_URL,newFct)
    .subscribe(
      
      data=>
      {
        alert("New Faculty Added");
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
