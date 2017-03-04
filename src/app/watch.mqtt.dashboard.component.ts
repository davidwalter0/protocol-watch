import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchMqttService } from './watch.mqtt.service';
import { Message } from './models/message';
import { Metadata } from './models/metadata';

@Component({
  selector: 'watch-mqtt-dashboard',
  templateUrl: './watch.mqtt.dashboard.component.html',
  styleUrls: ['./watch.mqtt.dashboard.component.css']
})
export class WatchMqttDashboardComponent implements OnInit, OnDestroy {
  metadata: Metadata;
  message: Message;
  topic: string = "";
  watchMqttService: WatchMqttService;

  constructor(watchMqttService: WatchMqttService) {
    this.watchMqttService = watchMqttService;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::WatchMqttDashboardComponent');
  }


  ngOnInit() {
    console.log('ngOnInit::WatchMqttDashboardComponent');
    this.watchMqttService.topicStream.subscribe((topic) => {
      this.topic = topic;
      if (this.topic === "") {
        delete this.message;
        delete this.metadata;
      }
    });
    this.watchMqttService.messageStream.subscribe((message) => {
      this.message = message;
    });
    this.watchMqttService.metadataStream.subscribe((metadata) => {
      this.metadata = metadata;
    });
  }
}
