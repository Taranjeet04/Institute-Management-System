import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Login } from './login';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
{

  //  readonly emp_URL:string="http://localhost:8080/findname";
  status:boolean=false;
  errmessage: string="";
  log:any;
  
  constructor(private http:HttpClient,private router:Router){

  }

  CheckStudent(loginForm:NgForm)
  {
    
    let username:string = loginForm.controls['Uname'].value;
    let passwordr:string = loginForm.controls['Upass'].value;
    
    if(username !="" && passwordr !="")
    {
      this.http.get<Login>('http://localhost:8080/findname/'+username+'/'+passwordr)
      .subscribe(
        data=>
        {
          alert("Welcome Student");        
          this.status=true;
          this.log=data;
          this.router.navigateByUrl('studentpage');
        
        },
        
        error=>
        {
          console.log("error !!!" +error);
          this.errmessage="error occured during adding!!"
        }
      );
  }
  else
  {
    alert("please enter username or password");
  }
}
  
  CheckAdmin(loginForm:NgForm)
  {
    
    let username:string = loginForm.controls['Uname'].value;
    let passwordr:string = loginForm.controls['Upass'].value;

    if(username=="admin" && passwordr=="admin")
    {
      alert("Welcome Admin");
           this.router.navigateByUrl('admin');
    }
    else
    {
      alert("Username or password is incorrect..!!")
    }

    // this.http.get<Login>('http://localhost:8080/findname/'+username+'/'+passwordr)
    // .subscribe(
    //    data=>
    //   {
    //     alert("Welcome Admin");
    //     this.status=true;
    //     this.log=data;
    //     this.router.navigateByUrl('admin');
       
    //   },
      
    //   error=>
    //   {
    //     console.log("error !!!" +error);
    //     this.errmessage="error occured during adding!!"
    //   }
    // );
  }





}
