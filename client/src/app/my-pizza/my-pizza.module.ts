import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPizzaComponent } from './my-pizza.component';



@NgModule({
  declarations: [
    MyPizzaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MyPizzaComponent]
})
export class MyPizzaModule { }
