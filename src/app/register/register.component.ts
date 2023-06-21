import {Register} from './register';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import{HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  readonly emp_URL:string="http://localhost:8080/addData";
  status:boolean=false;
  errmessage: string="";


  constructor(private http:HttpClient)
  {

  }

  
  SaveStudent(myStd:NgForm)
  {
    console.log("adding Student");
    console.log("Before"+myStd.value);

    let newStd=myStd.value;
    console.log("After" +newStd.value);
    this.http.post<Register>(this.emp_URL,newStd)
    .subscribe(
      
      data=>
      {
        alert("Student added")
       console.log("Employee added"+data);
      },
      
      error=>
      {
        console.log("error !!!" +error);
        this.errmessage="error occured during adding!!"
      }
    );
  }
  




}
