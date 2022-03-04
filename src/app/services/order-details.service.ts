import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  fooddetails=[
    {
      id:1,
      foodName:"Paneer Grilled Sandwich",
      foodDetails:"Pan-fried masala panner",
      foodPrice:200,
      foodImg:"../../../assets/img/pannerImg.jpg"
    },
    {
      id:2,
      foodName:"Veggie Surpreme",
      foodDetails:"Onion | Green Capsicum | Mushroom",
      foodPrice:219,
      foodImg:"../../../assets/img/veggieImg.jpg"
    },
    {
      id:3,
      foodName:"Paneer Barger",
      foodDetails:"Panner",
      foodPrice:149,
      foodImg:"../../../assets/img/bargerImg.jpg"
    },
    {
      id:4,
      foodName:"Veg Masala Roll in Name",
      foodDetails:"A homely mix of mashed potato and veggies",
      foodPrice:140,
      foodImg:"../../../assets/img/masalaImg.jpg"
    },
    {
      id:5,
      foodName:"Indulgence Brownie",
      foodDetails:"(Eggless) Indulge in richly decadant chocolate brownie crafed",
      foodPrice:105,
      foodImg:"../../../assets/img/browineImg.jpeg"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake Ice Cream",
      foodDetails:"Oreo Ice cream",
      foodPrice:219,
      foodImg:"../../../assets/img/creamImg.jpg"
    }
  ]
}
