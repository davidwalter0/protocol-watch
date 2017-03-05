import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractComponent } from '../abstract.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pubsub',
  templateUrl: 'pubsub.component.html',
  styles: [
  ],
})

export class PubSubComponent extends AbstractComponent implements OnInit, OnDestroy {
  error: any;

  constructor(public router: Router, public route: ActivatedRoute, public titleService: Title) {
    super(router, route, titleService);
    console.log('constructor::PubSubComponent');
  }

  ngOnInit() {
    console.log('ngOnInit::PubSubComponent');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy::PubSubComponent');
  }
}
