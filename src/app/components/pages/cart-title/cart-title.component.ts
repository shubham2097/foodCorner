import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-title',
  templateUrl: './cart-title.component.html',
  styleUrls: ['./cart-title.component.css']
})
export class CartTitleComponent implements OnInit{
  @Input() title!: string;
  @Input() margin? = '1rem 0 1rem 0.2rem';
  @Input() fontSize? = '1.7rem';
  constructor(){}
  ngOnInit(): void {  }


}
