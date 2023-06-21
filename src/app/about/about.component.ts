import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { About } from './about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  readonly emp_URL:string="http://localhost:8080/addEnquiry";
  status:boolean=false;
  errmessage: string="";


  constructor(private http:HttpClient){

  }

  SaveEnquiry(myEnq:NgForm)
  {
    console.log("adding Student");
    console.log("Before"+myEnq.value);

    let newEnq=myEnq.value;
    console.log("After" +newEnq.value)
    this.http.post<About>(this.emp_URL,newEnq)
    .subscribe(
      
      data=>
      {
       alert("Thanks For Your Enquiry,We will Get Back To You Soon"); 
       console.log("Enquiry Added added"+data);
      },
      
      error=>
      {
        console.log("error !!!" +error);
        this.errmessage="error occured during adding!!"
      }
    );
  }
  



}
