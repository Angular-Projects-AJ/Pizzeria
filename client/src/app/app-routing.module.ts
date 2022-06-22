import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { ProductDetailsComponent } from './food/product-details/product-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
 // {path: '', component: ManagerLogInComponent}, TO BE DONE
  {path: 'food', component: FoodComponent},
  {path: 'food/:id', component: ProductDetailsComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
