import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy {

  square: number = 0;

  dataSubscription?: Subscription;

  constructor(public data:DataService){}

  ngOnInit(): void {
    this.dataSubscription = this.data.counter.subscribe({
      next: (value:number)=>{
        this.square = value*value;
      },
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }



}
