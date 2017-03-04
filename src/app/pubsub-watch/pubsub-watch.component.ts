import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractComponent } from '../abstract.component';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'pubsub-watch',
  templateUrl: 'pubsub-watch.component.html',
  styles: [
  ]
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
