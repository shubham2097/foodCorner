import { Food } from "./Food";

export class cartItem{
    constructor(food : Food){
        this.food = food;
        this.price;
    }
    food:Food;
    quantity:number = 1;
    get price():number{
        return this.food.price * this.quantity
    }

}