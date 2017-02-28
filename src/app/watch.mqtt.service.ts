import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { MqttService, MqttConnectionState, MqttMessage } from 'angular2-mqtt';
import { Subscription } from 'rxjs/Subscription';
import * as root from '../protobuf/value.protobuf.js';
import { Message } from './models/message';
import { Metadata } from './models/metadata';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WatchMqttService implements OnDestroy, OnInit {
  public static host = 'localhost';
  public static port = 9001;;

  public host: string = WatchMqttService.host;
  public port: number = WatchMqttService.port;

  private subscription: Subscription;
  private subscribed: boolean = false;
  private message;
  public static topic: string = '';
  private topic: string = WatchMqttService.topic;

  private messageSource = new Subject<Message>();
  private metadataSource = new Subject<Metadata>();
  private topicSource = new Subject<string>();
  private subscribedSource = new Subject<boolean>();
  // observable stream
  // $ alias for: stream
  // messageStream = this.messageSource.asObservable();
  // message$ = this.messageSource.asObservable();
  public messageStream = this.messageSource.asObservable();
  public metadataStream = this.metadataSource.asObservable();
  public topicStream = this.topicSource.asObservable();
  public subscribedStream = this.subscribedSource.asObservable();
  public metadata: Metadata;

  constructor(public mqtt: MqttService) {
  }

  public meta(message: Message): Metadata {
    return {
      host: this.host,
      port: this.port,
      subscribed: this.subscribed,
      topic: this.topic,
      message: message,
    };
  }

  public metadataSubscribe() {
    this.subscription = this.mqtt
      .observe(this.topic)
      .subscribe((message: MqttMessage) => {
        try {
          console.log(message.payload);
          const value: root.example.Value = root.example.Value.decode(message.payload);

          // publish for downstream consumers
          let metadata = {
            host: this.host,
            port: this.port,
            subscribed: this.subscribed,
            topic: this.topic,
            message: {
              topic: this.topic,
              response: value.toJSON()
            }
          }

          this.metadataSource.next(<Metadata>metadata);
          console.log(JSON.stringify(metadata));
          this.metadata = <Metadata>metadata;

        } catch (e) {
          console.error(e);
        }
      });
  }

  public subscribe(topic: string) {
    WatchMqttService.topic = topic;
    this.topicSource.next(topic);
    this.topic = topic;
    this.subscribed = true;
    this.subscription = this.mqtt
      .observe(this.topic)
      .subscribe((message: MqttMessage) => {
        try {
          console.log(message.payload);
          const value: root.example.Value = root.example.Value.decode(message.payload);
          //////////////////////////////////////////
          // message
          //////////////////////////////////////////
          this.message = {
            topic: topic,
            response: value.toJSON()
          };
          // publish for downstream consumers
          this.messageSource.next(this.message);
          console.log(JSON.stringify(this.message));
          //////////////////////////////////////////
          // metadata
          //////////////////////////////////////////
          let metadata = {
            host: this.host,
            port: this.port,
            subscribed: this.subscribed,
            topic: this.topic,
            message: {
              topic: this.topic,
              response: value.toJSON()
            }
          }

          this.metadataSource.next(<Metadata>metadata);
          console.log(JSON.stringify(metadata));
          this.metadata = <Metadata>metadata;
          this.subscribedSource.next(this.subscribed);
        } catch (e) {
          console.error(e);
        }
      });
  }

  public unsubscribe() {
    this.subscribed = false;
    this.subscribedSource.next(this.subscribed);
    this.subscription ? this.subscription.unsubscribe() : null;
  }

  public ngOnDestroy() {
    this.subscription ? this.subscription.unsubscribe() : null;
  }

  ngOnInit() {
    this.subscribedSource.next(false);
  }

  updateConnection(host: string, port: number) {
    try {
      console.log('host', host, 'port', port);
      WatchMqttService.host = host;
      WatchMqttService.port = port;
      this.host = host;
      this.port = port;
      delete this.mqtt;
      this.mqtt = mqttServiceFactory();
    } catch (e) {
      console.log(e)
    }
  }

  public state() {
    return this.mqtt.state;
  }
}
export function mqttServiceFactory() {
  return new MqttService({
    hostname: WatchMqttService.host,
    port: WatchMqttService.port,
    path: '/'
  });
};
