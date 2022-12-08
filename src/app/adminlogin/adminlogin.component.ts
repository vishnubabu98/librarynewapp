import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  Username=""
  password=""
  constructor(private route:Router){}

  readValue=()=>
  {
    let data:any=
    {
      "Username":this.Username,
      "password":this.password
    }
    console.log(data)

    if (this.Username == "admin" && this.password == "12345") 
    {
       this.route.navigate(['/bookentry'])
    } else 
    {
      alert("invalid Credential")
    }
  }


}
