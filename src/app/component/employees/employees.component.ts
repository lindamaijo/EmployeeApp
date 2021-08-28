import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Employee} from 'src/app/employee';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employee:any;
  emp=new Employee();


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.getEmpdata();
  }
  getEmpdata(){
    this.dataService.getData().subscribe(res =>{
      this.employee=res;
      console.log(this.employee);
    });
  }
  insertData(){
    
    this.dataService.insertData(this.emp).subscribe(res=>{
      console.log(this.emp);
      this.getEmpdata();
      
    })
  }
  deleteData(id){
    this.dataService.deleteData(id).subscribe(res=>{
      console.log(id)
     
    })
    

  }

}
