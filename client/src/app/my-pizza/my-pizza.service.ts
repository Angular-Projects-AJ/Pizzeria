import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMyPizza, IMyPizzaItem } from '../shared/models/myPizza';
import { IOrder } from '../shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class MyPizzaService {
  baseUrl = environment.apiUrl;
  private myPizzaSource = new BehaviorSubject<IMyPizza>(null);
  myPizza$ = this.myPizzaSource.asObservable();


  constructor(private http: HttpClient) {
  }

  getMyPizza(id: string) {
    return this.http.get(this.baseUrl + 'myPizza?id=' + id)
    .pipe(
      map((myPizza: IMyPizza) => {
        this.myPizzaSource.next(myPizza);
      })
    );
  }

  private addOrUpdateOrder(items: IMyPizzaItem[], itemToAdd: IMyPizzaItem, orderStatus: string, tip: number) : IMyPizzaItem[] {
      console.log(items);
      const index = items.findIndex(i => i.id === itemToAdd.id);
      if(index === -1) {
        itemToAdd.orderStatus = orderStatus;
        itemToAdd.tip = tip;
        items.push(itemToAdd);
      } else {
        items[index].tip += tip;
        items[index].orderStatus = 'delivered';
      }
      return items;
  }

  private mapOrderItemToMyPizzaItem(item: IOrder, orderStatus: string, tip: number) : IMyPizzaItem {
    return {

      id: item.id,
      employeeName: item.employeeName,
      customerFistName: item.customerFistName,
      customerLastName: item.customerLastName,
      customerPhoneNumber: item.customerPhoneNumber,
      customerAddress: item.customerAddress,
      customerAddressZipCode: item.customerAddressZipCode,
      promisedDeliveryTime: item.promisedDeliveryTime,
      pizzasSize: item.pizzasSize,
      initialDeliveryTime: item.initialDeliveryTime,
      finalDeliveryTime: item.finalDeliveryTime,
      errorInDeliveryTime: item.errorInDeliveryTime,
      orderTotalRevenue: item.orderTotalRevenue,
      orderBasket: item.orderBasket,
  
      orderStatus: item.orderStatus,
      tip,
    };
  }
}
