import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  counter = 0;

  subjectVariable = new Subject<string>();
  behaviorVariable = new BehaviorSubject<string>('starting value');
  replayVariable = new ReplaySubject<string>();

  constructor() {

    setInterval(() => {

      this.counter++;
      const nextValue = 'sono passati ' + this.counter * 2  + ' secondi';

      this.subjectVariable.next(nextValue);
      this.behaviorVariable.next(nextValue);
      this.replayVariable.next(nextValue);

    }, 2000)


  }
}
