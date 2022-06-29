import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { __importStar } from 'tslib';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { FoodComponent } from './food/food.component';
import { ProductDetailsComponent } from './food/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { ManagerLogInComponent } from './manager-log-in/manager-log-in.component';
import { MyPizzaComponent } from './my-pizza/my-pizza.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'manager-log-in', component: ManagerLogInComponent},
  // {path: 'my-pizza', component: MyPizzaComponent},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'my-pizza', loadChildren: () => import('./my-pizza/my-pizza.module').then(mod => mod.MyPizzaModule)},
  {path: 'food', loadChildren: () => import('./food/food.module').then(mod => mod.FoodModule)},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
