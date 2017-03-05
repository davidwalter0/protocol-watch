import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractComponent } from '../abstract.component';
import { flyInOutTrigger } from '../animations/flyInOutTrigger-animation';
import { hostConfig } from '../animations/flyInOutTrigger-animation';

@Component({
  selector: 'pubsub',
  templateUrl: 'pubsub.component.html',
  styles: [
  ],
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
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
