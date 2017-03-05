import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { AbstractComponent } from '../abstract.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pubsub-watch',
  templateUrl: 'pubsub-watch.component.html',
  styles: [
  ],
})

export class PubSubWatchComponent extends AbstractComponent implements OnInit, OnDestroy {
  error: any;

  constructor(public router: Router, public route: ActivatedRoute, public titleService: Title) {
    super(router, route, titleService);
    console.log('constructor::PubSubWatchComponent');
  }

  ngOnInit() {
    console.log('ngOnInit::PubSubWatchComponent');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy::PubSubWatchComponent');
  }
}
