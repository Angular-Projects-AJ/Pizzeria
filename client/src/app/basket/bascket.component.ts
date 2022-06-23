import { Component, OnInit } from '@angular/core';
import { IBasket, IBasketItem } from '../shared/models/basket';
import { Observable } from 'rxjs';
import { BasketService } from './basket.service';

@Component({
  selector: 'app-bascket',
  templateUrl: './bascket.component.html',
  styleUrls: ['./bascket.component.scss']
})
export class BascketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: IBasketItem)
  {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem)
  {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem)
  {
    this.basketService.decrementItemQuantity(item);
  }
  // decreaseQuantity(){
  //   this.basketService.basket$.u
  // }

}
