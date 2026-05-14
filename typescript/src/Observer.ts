interface Subscriber {
  update(message: string): void;
}

class User implements Subscriber {
  constructor(private name: string) {}

  update(message: string) {
    console.log(`${this.name} received: ${message}`);
  }
}

class YoutubeChannel {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(message: string) {
    for (const subscriber of this.subscribers) {
      subscriber.update(message);
    }
  }
}

const channel = new YoutubeChannel();

channel.subscribe(new User("Rohit"));
channel.subscribe(new User("Amit"));

channel.notify("New video uploaded!");