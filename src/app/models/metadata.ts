export class Metadata {
  host: string;
  port: number;
  subscribed: boolean;
  topic: string;
  message: {
    topic: string;
    response: {
      value: number;
      text: string;
    };
  };
}
