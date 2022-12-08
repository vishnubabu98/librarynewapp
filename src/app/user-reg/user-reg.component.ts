import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  Name=""
  Aadharnumber=""
  Address=""
  Pincode=""
  Dateofbirth=""
  Emailid=""
  Phonenumber=""
  Username=""
  password=""
  confirmpassword=""


  readValue=()=>
  {
    let data:any=
    {
      "Name":this.Name,
      "Aadharnumber":this.Aadharnumber,
      "Address":this.Address,
      "Pincode":this.Pincode,
      "Dateofbirth":this.Dateofbirth,
      "Emailid":this.Emailid,
      "Phonenumber":this.Phonenumber,
      "Username":this.Username,
      "password":this.password,
      "confirmpassword":this.confirmpassword
    }
    console.log(data)
    
  }


}
