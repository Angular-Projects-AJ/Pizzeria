import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { FoodModule } from './food/food.module';
import { HomeModule } from './home/home.module';
import { ManagerLogInModule } from './manager-log-in/manager-log-in.module';
import { MyPizzaModule } from './my-pizza/my-pizza.module';


@NgModule({
  declarations: [
    AppComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    // FoodModule,
    HomeModule,
    ManagerLogInModule,
    MyPizzaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
