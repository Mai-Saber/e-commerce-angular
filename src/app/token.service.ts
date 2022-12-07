import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TokenService {

   constructor(public _HttpClient: HttpClient) { }

  getToken(url:string, data:object){
    return this._HttpClient.post(url,data)

}
}
