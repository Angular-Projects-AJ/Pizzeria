import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { ProductDetailsComponent } from './food/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ManagerLogInComponent } from './manager-log-in/manager-log-in.component';
import { MyPizzaComponent } from './my-pizza/my-pizza.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', component: ManagerLogInComponent},
  {path: '', component: MyPizzaComponent},
  
  {path: 'food', component: FoodComponent},
  {path: 'food/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
