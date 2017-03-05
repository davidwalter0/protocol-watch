import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmptyComponent } from './empty/empty.component';
import { WatchComponent } from './watch/watch.component';
import { PubSubWatchComponent } from './pubsub-watch/pubsub-watch.component';
import { PubSubComponent } from './pubsub/pubsub.component';
import { AuthGuard } from './auth.service';

export const router: Routes = [
  { path: '', component: PubSubWatchComponent, canActivate: [AuthGuard] },
  // { path: 'pubsub-watch', component: PubSubWatchComponent, canActivate: [AuthGuard] },
  { path: 'pubsub', component: PubSubComponent, canActivate: [AuthGuard] },
  { path: 'watch', component: WatchComponent, canActivate: [AuthGuard] },
  { path: '**', component: EmptyComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
