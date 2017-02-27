import { Component } from '@angular/core';
import { MqttService, MqttMessage } from 'angular2-mqtt';
import { SubscribeComponent } from './subscribe.component';

import * as root from '../protobuf/value.protobuf.js';

@Component({
  selector: 'publish',
  templateUrl: 'publish.component.html',
})
export class PublishComponent {
  ngOnInit() { }

  state: string = '';
  error: any;

  constructor(private mqtt: MqttService) { }

  public publish($message: string, $text: string) {
    const buffer = root.example.Value.encode({ value: $message, text: $text }).finish();
    this.mqtt.unsafePublish(SubscribeComponent.topic, buffer);
  }

  onSubmit(formData) {
    if (!formData.valid) {
      console.log(formData.value);
      this.error = `both fields are required`;
      console.log(this.error);
    }
  }

}
