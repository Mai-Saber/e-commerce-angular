import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor(public _HttpClient: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts')

}

}
