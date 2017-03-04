import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { MqttService, MqttConnectionState, MqttMessage } from 'angular2-mqtt';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as root from '../protobuf/value.protobuf.js';
import { WatchMqttService } from './watch.mqtt.service';

@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.component.html',
})
export class SubscribeComponent implements OnInit, OnDestroy, AfterViewInit {

  public port: number = WatchMqttService.port;
  public host: string = WatchMqttService.host;

  public topic: string = '';
  private subscribed: boolean = false;
  private message;
  public watchMqttService: WatchMqttService;
  public MqttConnectionState = MqttConnectionState;

  constructor(watchMqttService: WatchMqttService, public mqtt: MqttService) {
    this.watchMqttService = watchMqttService;
  }

  public subscribe(topic: string) {
    if (topic !== "") {
      this.topic = topic;
      this.watchMqttService.subscribe(topic);
      this.subscribed = true;
    }
  }
  public unsubscribe() {
    this.watchMqttService.unsubscribe();
    this.subscribed = false;
  }

  public ngOnDestroy() {
    console.log('ngOnDestroy::SubscribeComponent');
    this.watchMqttService ? this.watchMqttService.unsubscribe() : null;
  }

  updateConnection(host: string, port: number) {
    console.log('host', host, 'port', port);
    WatchMqttService.host = host;
    WatchMqttService.port = port;
    this.port = port;
    this.host = host;
    this.watchMqttService.updateConnection(host, port);
  }
  ngOnInit() {
    console.log('ngOnInit::SubscribeComponent');
  }
  ngAfterViewInit() {
  }
}
