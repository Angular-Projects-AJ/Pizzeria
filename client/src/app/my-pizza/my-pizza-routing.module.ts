import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPizzaComponent } from './my-pizza.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MyPizzaComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MyPizzaRoutingModule { }
