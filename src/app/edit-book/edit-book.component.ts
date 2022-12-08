import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  Booktitle=""

  readValue=()=>
  {
    let data:any=
    {
      "Booktitle":this.Booktitle
    }
    console.log(data)
  }

}
