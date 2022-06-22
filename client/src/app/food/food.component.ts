import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productTypes';
import { FoodService } from './food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {
  products: IProduct[];
  types: IType[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.getProducts();
    this.getTypes();
  }

  getProducts(){
    this.foodService.getProducts().subscribe(response => {
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }

  getTypes() {
    this.foodService.getTypes().subscribe(response => {
      this.types = response;
    }, error => {
      console.log(error);
    }); 
  }



}
