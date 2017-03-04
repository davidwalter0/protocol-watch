import { Component, OnInit, OnDestroy } from '@angular/core';
import { WatchMqttService } from './watch.mqtt.service';
import { Message } from './models/message';
import { Metadata } from './models/metadata';

@Component({
  selector: 'watch-mqtt-metadata',
  templateUrl: './watch.mqtt.metadata.component.html',
  styleUrls: ['./watch.mqtt.metadata.component.css']
})
export class WatchMqttMetadataComponent implements OnInit, OnDestroy {
  metadata: Metadata;
  message: Message;
  topic: string = "";
  watchMqttService: WatchMqttService;

  constructor(watchMqttService: WatchMqttService) {
    this.watchMqttService = watchMqttService;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy::WatchMqttMetadataComponent');
  }

  ngOnInit() {
    console.log('ngOnInit::WatchMqttMetadataComponent')
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
