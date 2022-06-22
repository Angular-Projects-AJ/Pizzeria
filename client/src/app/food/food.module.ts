import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    FoodComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [FoodComponent]
})
export class FoodModule { }
