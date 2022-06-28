import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPizzaComponent } from './my-pizza.component';
import { MyPizzaRoutingModule } from './my-pizza-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MyPizzaComponent
  ],
  imports: [
    CommonModule, 
    MyPizzaRoutingModule,
    SharedModule
  ],
  exports: [MyPizzaComponent]
})
export class MyPizzaModule { }
