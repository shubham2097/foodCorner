import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Food } from '../shared/model/Food';
import { cartItem } from '../shared/model/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart= new Cart();
  constructor() { }

  addToCart(food:Food):void{
    let cartIte = this.cart.items.find(item => item.food.id == food.id)
    if(cartIte){
      this.changeQuantity(food.id, cartIte.quantity + 1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  getCart():Cart{
    return this.cart;
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id == foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity; 
  } 

}
