import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BascketComponent } from './bascket.component';
import { BasketRoutingModule } from './basket-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BascketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }
