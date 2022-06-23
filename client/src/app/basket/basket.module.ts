import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BascketComponent } from './bascket.component';
import { BasketRoutingModule } from './basket-routing.module';



@NgModule({
  declarations: [
    BascketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
