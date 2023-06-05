import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  counter = new BehaviorSubject<number>(0);

  constructor() { }

  increment(){
    const actualValue= this.counter.value;
    const newValue = actualValue + 1;
    this.counter.next(newValue);
  }

  decrement(){
    const actualValue= this.counter.value;
    const newValue = actualValue - 1;
    this.counter.next(newValue);
  }

  square(){
    return this.counter.pipe(
      map((value: number) => value ** 2)
    )
  }

  isEven(){
    return this.square().pipe(
      map((square: number) => square % 2 === 0)
    )
  }


}
