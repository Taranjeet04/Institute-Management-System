import { Component } from '@angular/core';
import { ViewFaculty } from './viewfaculty';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewfaculty',
  templateUrl: './viewfaculty.component.html',
  styleUrls: ['./viewfaculty.component.css']
})
export class ViewfacultyComponent 
{
  readonly pro_url:string="http://localhost:8080/allFaculty";
  status:boolean=false;
  errmsg:string="";
  fctarr:ViewFaculty[]=[];

  constructor(private http:HttpClient)
  {
    this.getAllFaculty();
  }
  
  getAllFaculty()
  {
    this.http.get<ViewFaculty[]>(this.pro_url).
    subscribe(
      data=>
      {
        this.status=false;
        this.fctarr=data;
      },
      error=>
      {
        this.status=false;
        this.errmsg="Data Not Found";
      }

    );
  }
}
