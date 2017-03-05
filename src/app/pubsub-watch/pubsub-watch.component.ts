import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractComponent } from '../abstract.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { flyInOutTrigger } from '../animations/flyInOutTrigger-animation';
import { hostConfig } from '../animations/flyInOutTrigger-animation';

@Component({
  selector: 'pubsub-watch',
  templateUrl: 'pubsub-watch.component.html',
  styles: [
  ],
  host: hostConfig,
  animations: [
    flyInOutTrigger
  ],
})

export class PubSubWatchComponent extends AbstractComponent implements OnInit, OnDestroy {
  error: any;

  constructor(router: Router, route: ActivatedRoute, titleService: Title) {
    console.log('constructor::PubSubWatchComponent');
    super(router, route, titleService);
  }

  ngOnInit() {
    console.log('ngOnInit::PubSubWatchComponent');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy::PubSubWatchComponent');
  }
}
