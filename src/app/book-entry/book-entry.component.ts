import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  name=""
  image=""
  price=""
  author=""
  Description=""
  Publisher=""
  language=""
  address=""
  releasedyear=""




  readValue=()=>
  {
    let data:any=
    {
      
      "name":this.name,
      "image":this.image,
      "price":this.price,
      "author":this.author,
      "Description":this.Description,
      "Publisher":this.Publisher,
      "language":this.language,
      "Address":this.address,
      "releasedyear":this.releasedyear
      
  
    }
    console.log(data)

  }


}
