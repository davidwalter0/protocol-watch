import { Component } from '@angular/core';
import { MqttService, MqttConnectionState, MqttMessage } from 'angular2-mqtt';
import { SubscribeComponent } from './subscribe.component';
import { WatchMqttService } from './watch.mqtt.service';

import * as root from '../protobuf/value.protobuf.js';

@Component({
  selector: 'publish',
  templateUrl: 'publish.component.html',
})
export class PublishComponent {
  public error: any;
  public MqttConnectionState = MqttConnectionState;
  public topic: string;
  public host: string;
  public port: number;
  ngOnInit() {
    this.watchMqttService.topicStream.subscribe((topic) => {
      this.topic = topic;
    });
    this.watchMqttService.metadataStream.subscribe((metadata) => {
      if (metadata != undefined) {
        this.host = metadata.host;
        this.port = metadata.port;
      }
    });
  }

  constructor(public watchMqttService: WatchMqttService) {
  }

  public publish($message: string, $text: string) {
    const buffer = root.example.Value.encode({ value: $message, text: $text }).finish();
    this.watchMqttService.mqtt.unsafePublish(this.topic, buffer);
  }

  onSubmit(formData) {
    if (!formData.valid) {
      console.log(formData.value);
      this.error = `both fields are required`;
      console.log(this.error);
    }
  }
}
