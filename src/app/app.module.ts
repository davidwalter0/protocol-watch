import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { AngularFireModule } from 'angularfire2';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { routes } from './app.routes';
import { WatchComponent } from './watch/watch.component';
import { PubSubWatchComponent } from './pubsub-watch/pubsub-watch.component';
import { PubSubComponent } from './pubsub/pubsub.component';

import { PublishComponent } from './publish.component';
import { SubscribeComponent } from './subscribe.component';
import { WatchMqttService, mqttServiceFactory } from './watch.mqtt.service';
import { WatchMqttDashboardComponent } from './watch.mqtt.dashboard.component';
import { WatchMqttMetadataComponent } from './watch.mqtt.metadata.component';

import { MqttMessage, MqttModule, MqttService } from 'angular2-mqtt';
import { MaterialModule } from '@angular/material';
import { MdlModule } from 'angular2-mdl';
import { MdlPopoverModule } from '@angular2-mdl-ext/popover';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { firebaseConfigCredentials } from './firebase.credentials';
import { AuthGuard } from './auth.service';
import { EmptyComponent } from './empty/empty.component';
import { ProtobufDefComponent } from './protobuf-def/protobuf-def.component';
import { ProtobufDefService } from './protobuf-def/protobuf-def.service';

@NgModule({
  declarations: [
    AppComponent,
    WatchComponent,
    PublishComponent,
    PubSubWatchComponent,
    PubSubComponent,
    SubscribeComponent,
    WatchMqttDashboardComponent,
    WatchMqttMetadataComponent,
    EmptyComponent,
    ProtobufDefComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory,
    }),
    MaterialModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfigCredentials),
    routes,
  ],
  providers: [
    ProtobufDefService,
    WatchMqttService,
    AuthGuard,
    Location, { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
