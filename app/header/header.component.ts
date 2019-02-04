import { Component, OnInit } from '@angular/core';
import{student} from '../student';
import{NgForm} from'@angular/forms';
import{ ServiceService } from '../service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  student = new student();
isRegistered =false;
  constructor(private applyService: ServiceService) { }

  ngOnInit() {
    
  }
registration(f: NgForm){
  this.applyService.store(this.student).subscribe(date=>{
    this.isRegistered=true;
    console.log('registrerd successfully');
    f.reset();
    },
    (err) => {this.isRegistered=false}
  );
}
}
