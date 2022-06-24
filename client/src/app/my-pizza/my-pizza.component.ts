import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyPizza } from '../shared/models/myPizza';
import { MyPizzaService } from './my-pizza.service';

@Component({
  selector: 'app-my-pizza',
  templateUrl: './my-pizza.component.html',
  styleUrls: ['./my-pizza.component.scss']

})
export class MyPizzaComponent implements OnInit {
  myPizza$: Observable<IMyPizza>;

  constructor(private myPizzaService: MyPizzaService) { }

  ngOnInit(): void {
    this.myPizza$ = this.myPizzaService.myPizza$;
  }

}
