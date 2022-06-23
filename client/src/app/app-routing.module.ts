import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { __importStar } from 'tslib';
import { FoodComponent } from './food/food.component';
import { ProductDetailsComponent } from './food/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ManagerLogInComponent } from './manager-log-in/manager-log-in.component';
import { MyPizzaComponent } from './my-pizza/my-pizza.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manager-log-in', component: ManagerLogInComponent},
  {path: 'my-pizza', component: MyPizzaComponent},
  {path: 'food', loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
