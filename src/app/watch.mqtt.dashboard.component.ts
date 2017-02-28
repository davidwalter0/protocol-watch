import { Component } from '@angular/core';
import { WatchMqttService } from './watch.mqtt.service';
import { Message } from './models/message';
import { Metadata } from './models/metadata';

@Component({
  selector: 'watch-mqtt-dashboard',
  templateUrl: './watch.mqtt.dashboard.component.html',
  styleUrls: ['././watch.mqtt.dashboard.component.css']
})
export class WatchMqttDashboardComponent {
  metadata: Metadata;
  message: Message;
  topic: string = "";
  watchMqttService: WatchMqttService;

  constructor(watchMqttService: WatchMqttService) {
    this.watchMqttService = watchMqttService;
  }

  ngOnInit() {
    this.watchMqttService.topicStream.subscribe((topic) => {
      this.topic = topic;
    });
    this.watchMqttService.messageStream.subscribe((message) => {
      this.message = message;
    });
    this.watchMqttService.metadataStream.subscribe((metadata) => {
      this.metadata = metadata;
    });
  }
}
