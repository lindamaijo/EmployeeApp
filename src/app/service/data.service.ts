import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpclient:HttpClient) { }
  getData(){
    return this.httpclient.get("http://127.0.0.1:8000/api/Employee");
  }
  insertData(data){
    console.log(data);
    return this.httpclient.post("http://127.0.0.1:8000/api/Employee/",data);
  }
  deleteData(id){
    console.log(id);
    return this.httpclient.delete("http://127.0.0.1:8000/api/Employee/"+id);
  }
  getEmployeeById(id){
    return this.httpclient.get("http://127.0.0.1:8000/api/Employee/"+id);
  }
  updateEmployee(id,data){
    return this.httpclient.put("http://127.0.0.1:8000/api/Employee/"+id,data);
  }
}

