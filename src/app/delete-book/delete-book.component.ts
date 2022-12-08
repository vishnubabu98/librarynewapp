import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
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
