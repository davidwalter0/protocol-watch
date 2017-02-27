import { Component } from '@angular/core';
import { MqttService, MqttConnectionState } from 'angular2-mqtt';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  public static port = 9001;;
  public static host = 'localhost';
  public port: number = AppComponent.port;
  public host: string = AppComponent.host;

  public MqttConnectionState = MqttConnectionState;
  public connectionState: Observable<MqttConnectionState>;
  public jsonObject;

  constructor(private mqtt: MqttService) {
  }

  onSubmit(formData) {
    if (formData.valid) {
      console.log(JSON.stringify(formData));
      this.updateConnection(formData.host, formData.port);
    }
  }

  updateConnection(host: string, port: number) {
    AppComponent.host = host;
    AppComponent.port = port;
    this.host = host;
    this.port = port;
    delete this.mqtt;
    this.mqtt = mqttServiceFactory();
  }
}

export function mqttServiceFactory() {
  return new MqttService({
    hostname: AppComponent.host,
    port: AppComponent.port,
    path: '/'
  });
};
