import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/Cart';
import { Food } from '../shared/model/Food';
import { cartItem } from '../shared/model/CartItem';
import { BehaviorSubject, Observable } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(food: Food): void {
    let cartIte = this.cart.items.find((item) => item.food.id == food.id);
    if (cartIte) {
      return;
    }
    this.cart.items.push(new cartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  // getCart(): Cart {
  //   return this.cart;
  // }

  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id == foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart():void{
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum,currenctItem)=>prevSum + currenctItem.price ,0);
    this.cart.totalCount = this.cart.items.reduce((prevSum,currenctItem)=>prevSum + currenctItem.quantity ,0);

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():void{
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson): new Cart();
  }
}
