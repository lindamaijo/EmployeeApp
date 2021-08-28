import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user={
    email:null,
    password:null,
    name:null,
    password_confirmation:null
  };
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  register(){

    return this.http.post("http://127.0.0.1:8000/api/register/",this.user).subscribe(res=>{
      console.log(res);
      alert("Registered Successfully"+this.user.name)
    })
  }

}
