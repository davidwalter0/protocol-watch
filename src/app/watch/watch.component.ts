import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractComponent } from '../abstract.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'watch',
  templateUrl: 'watch.component.html',
  styles: [
  ],
})

export class WatchComponent extends AbstractComponent implements OnInit, OnDestroy {
  error: any;

  constructor(public router: Router, public route: ActivatedRoute, public titleService: Title) {
    super(router, route, titleService);
    console.log('constructor::WatchComponent');
  }

  ngOnInit() {
    console.log('ngOnInit::WatchComponent');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::WatchComponent');
  }
}
