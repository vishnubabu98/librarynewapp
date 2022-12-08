import { Component } from '@angular/core';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent {

  Name=""
  Booktitle=""
  Dateofissue=""
  Memno=""

  readValue=()=>
  {
    let data:any=
    {
      
      "Name":this.Name,
      "Booktitle":this.Booktitle,
      "Dateofissue":this.Dateofissue,
      "Memno":this.Memno
      
  
    }
    console.log(data)

  }

}
