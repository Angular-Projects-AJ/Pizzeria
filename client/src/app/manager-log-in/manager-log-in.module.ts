import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerLogInComponent } from './manager-log-in.component';
import { BascketComponent } from '../basket/bascket.component';



@NgModule({
  declarations: [
    ManagerLogInComponent,

  ],
  imports: [
    CommonModule
  ],
  exports: [ManagerLogInComponent]
})
export class ManagerLogInModule { }
