import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractComponent } from '../abstract.component';

@Component({
  selector: 'pubsub',
  templateUrl: 'pubsub.component.html',
  styles: [
  ]
})

export class PubSubComponent implements OnInit, OnDestroy {
  error: any;
  ngOnInit() {
  }
  constructor() { }
  ngOnDestroy() {
    console.log('ngOnDestroy::PubSubComponent');
  }

}
