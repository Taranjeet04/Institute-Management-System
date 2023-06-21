import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Enquiry } from './enquiry';

@Component({
  selector: 'app-viewenquiry',
  templateUrl: './viewenquiry.component.html',
  styleUrls: ['./viewenquiry.component.css']
})
export class ViewenquiryComponent {

  readonly pro_url:string="http://localhost:8080/allEnquiry";
  status:boolean=false;
  errmsg:string="";
  enqarr:Enquiry[]=[];

  constructor(private http:HttpClient)
  {
    this.getAllEnquiry();
  }
  
  getAllEnquiry()
  {
    this.http.get<Enquiry[]>(this.pro_url).
    subscribe(
      data=>
      {
        this.status=false;
        this.enqarr=data;
      },
      error=>
      {
        this.status=false;
        this.errmsg="Data Not Found";
      }

    );
  }


}
