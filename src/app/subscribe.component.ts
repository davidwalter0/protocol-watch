import { Component, OnDestroy } from '@angular/core';
import { MqttService, MqttMessage } from 'angular2-mqtt';
import { Subscription } from 'rxjs/Subscription';
import * as root from '../protobuf/value.protobuf.js';

@Component({
  selector: 'subscribe',
  templateUrl: 'subscribe.component.html',
})
export class SubscribeComponent implements OnDestroy {
  private subscription: Subscription;
  private subscribed: boolean = false;
  private message;
  public static topic: string = 'angular2-protobuf-mqtt-example';
  private topic: string = SubscribeComponent.topic;

  constructor(private mqtt: MqttService) {

  }

  public subscribe(topic: string) {
    SubscribeComponent.topic = topic;
    this.topic = topic;
    this.subscribed = true;
    this.subscription = this.mqtt
      .observe(this.topic)
      .subscribe((message: MqttMessage) => {
        try {
          console.log(message.payload);
          const value: root.example.Value = root.example.Value.decode(message.payload);
          this.message = {
            topic: topic,
            response: value.toJSON()
          };
        } catch (e) {
          console.error(e);
        }
      });
  }

  public unsubscribe() {
    this.subscribed = false;
    this.message = null;
    this.subscription ? this.subscription.unsubscribe() : null;
  }

  public ngOnDestroy() {
    this.subscription ? this.subscription.unsubscribe() : null;
  }
}
