import { Component } from '@angular/core';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
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
