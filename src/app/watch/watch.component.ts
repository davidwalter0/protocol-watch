import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Title } from '@angular/platform-browser';

import { AbstractComponent } from '../abstract.component';
// import { flyInOutTrigger } from '../animations/flyInOutTrigger-animation';
// import { hostConfig } from '../animations/flyInOutTrigger-animation';

@Component({
  selector: 'watch',
  // host: hostConfig,
  // animations: [
  //     flyInOutTrigger
  // ],
  templateUrl: 'watch.component.html',
  styles: [
    // 'material.indigo-light_blue.min.css',
  ]
})

// export class WatchComponent extends AbstractComponent implements OnInit {
export class WatchComponent implements OnInit, OnDestroy {
  error: any;
  angularFire: AngularFire;
  router: Router;
  route: ActivatedRoute;
  // constructor(router: Router, route: ActivatedRoute, titleService: Title) {
  //   super(router, route, titleService);
  // }
  ngOnInit() {
  }

  constructor(angularFire: AngularFire, router: Router, route: ActivatedRoute, titleService: Title) {
    this.router = router;
    this.route = route;
  }
  ngOnDestroy() {
    console.log('ngOnDestroy::WatchComponent');
  }
}
