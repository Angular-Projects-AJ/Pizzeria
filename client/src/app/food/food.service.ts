import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productTypes';
import {map} from 'rxjs/operators';
import { FoodParams } from '../shared/models/foodParams';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(foodParams: FoodParams) {
    let params = new HttpParams();

    if(foodParams.typeId)
    {
      params = params.append('typeId', foodParams.typeId.toString());
    }

    if(foodParams.sort)
    {
      params = params.append('sort', foodParams.sort);
    }

    return this.http.get<IPagination>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response =>{
          return response.body;
        })
      );
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}
