import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   rollno :number;
   name:string;
   batch:string;
   department:string;
image:string;

  sendStudent:EventEmitter<any>=new EventEmitter();
  selectStudent(){
    let selectstudent:any={srollno:this.rollno,sname:this.name,sbatch:this.batch,sdepartment:this.department,simage:this.image};
  this.sendStudent.emit(selectstudent);
  }
  constructor() { }

  ngOnInit() {
  }

}
