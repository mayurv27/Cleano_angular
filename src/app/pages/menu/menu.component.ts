import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public productList : any ;
  constructor(private api : ApiService, private cartervice : CartService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any)=> {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addtocart(item : any){
    // this.cartervice.addtoCart(item);
    return this.afs.collection('products').add(item);
  }

}