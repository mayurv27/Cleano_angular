import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


    // clothdetails 
  
    clothDetails = [
      {
        id:1,
        clothName:"Shirt",
        clothDetails:"T-shirts,Shirts",
        clothPrice:10,
        clothImg:"../../../assets/img/shirt.png"
      },
      {
        id:2,
        clothName:"Pants",
        clothDetails:"Jeans,Shorts,Trousers",
        clothPrice:10,
        clothImg:"../../../assets/img/jeans.png"
      },
      {
        id:3,
        clothName:"Saree",
        clothDetails:"Saree,Kurti",
        clothPrice:10,
        clothImg:"../../../assets/img/saree.png"
      },
      {
        id:4,
        clothName:"Blazer",
        clothDetails:"Well Clean Blazer",
        clothPrice:10,
        clothImg:"../../../assets/img/blazer.png"
      },
      
    ]
  
  
    
  
  }
