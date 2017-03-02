import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PublishComponent } from './publish.component';
import { SubscribeComponent } from './subscribe.component';
import { WatchMqttService, mqttServiceFactory } from './watch.mqtt.service';
import { WatchMqttDashboardComponent } from './watch.mqtt.dashboard.component';
import { WatchMqttMetadataComponent } from './watch.mqtt.metadata.component';

import { MqttMessage, MqttModule, MqttService } from 'angular2-mqtt';

@NgModule({
  declarations: [
    AppComponent,
    PublishComponent,
    SubscribeComponent,
    WatchMqttDashboardComponent,
    WatchMqttMetadataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory,
    })
  ],
  providers: [
    WatchMqttService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
