import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentregisteration',
  templateUrl: './studentregisteration.component.html',
  styleUrls: ['./studentregisteration.component.css']
})
export class StudentregisterationComponent implements OnInit {
  public StudentDetails:any=[{rollno:"1",name:"jeslin",batch:"MCA s6",department:"MCA",image:"jeslin"},
  {rollno:"2 ",name:"jomy",batch:"MCA S6",department:"MCA",image:"jeslin"},
  {rollno:"3 ",name:"josna",batch:"MCA S6",department:"MCA",image:"jeslin"}];
  viewstudent:any;
  addstudent(data:any){
  this.viewstudent=data;
  
  }
  constructor() { }

  ngOnInit() {
  }

}
