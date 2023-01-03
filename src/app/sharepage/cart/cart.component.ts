import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private afs: AngularFirestore) { }

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.products = res;
    //   this.grandTotal = this.cartService.getTotalPrice();
    // })
    this.afs.collection('products').snapshotChanges().subscribe(data =>{this.products=[]; data.map(a=>{const data=a.payload.doc.data();const id =a.payload.doc.id;this.products.push({id: id, ...data as CartComponent})})})
  }
  removeItem(item : any){
    // this.cartService.removeCartItem(item);
    this.cartService.removeCartItem(item);
    console.log(item)
    this.afs.collection('products').doc(item.id).delete().then(() => {
      console.log("Product successfully deleted!");
    }).catch((error) =>{
      console.log("Error removing documents",error);
    });
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  
  
  }

  
