import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  hello(): Observable<any>{

    let person={
      "name":"Hasanga",
      "age":25
    }

    return new Observable<any>(stream => {
      stream.next(person);
      stream.complete();
    });
  }



}
