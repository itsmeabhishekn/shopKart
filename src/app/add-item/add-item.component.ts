import { Component } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

title=""
description=""
id=""
price=""
category=""
rating=""
seller=""
quantity=""

readValues =()=>
{
  let data = {"title":this.title,"seller":this.seller,"description":this.description,
"id":this.id,
"quantity":this.quantity,
"price":this.price,
"category":this.category,
"rating":this.rating}
console.log(data)

}


}
