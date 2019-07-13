import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  events: Eventing = new Eventing();

  constructor(public models: T[] = []) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(models: T[]): void {
    this.models = models;
    this.trigger("change");
  }

  get() {
    return this.models;
  }

  fetch(rootUrl: string, deserialize: (json: K) => T): void {
    axios.get(rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(deserialize(value));
      });

      this.trigger("change");
    });
  }
}
