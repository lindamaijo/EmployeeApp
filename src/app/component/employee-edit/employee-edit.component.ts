import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
 id:any;
 data:any;
 employee=new Employee();
  constructor( private route:ActivatedRoute,private service:DataService) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id
    this.getData();
  }

  getData(){
    this.service.getEmployeeById(this.id).subscribe(res=>{
     this.data=res;
     this.employee=this.data; 
    
    });
   
  }
  updateEmp(){
    this.service.updateEmployee(this.id,this.employee).subscribe(res=>{

    })

  }

}
