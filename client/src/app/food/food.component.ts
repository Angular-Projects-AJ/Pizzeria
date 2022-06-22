import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  products: IProduct[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }

}
