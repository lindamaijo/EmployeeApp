import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http'
import { ok } from 'assert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user=
    {
      "email":null,
      "password":null
    }
  

  constructor(private http:HttpClient ) { }

  onSubmit(){
   
    return this.http.post("http://127.0.0.1:8000/api/login/",this.user).subscribe(res=>{
      console.log(res);
      alert("login Successfully"+this.user)

    })
    
  }

  ngOnInit(): void {

    console.log(this.user)
  }
  regiter(){
    
  }

}
