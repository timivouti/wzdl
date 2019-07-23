import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { shallowEqualObjects } from "../utils/shallowEqual";

export class Collection<T, K> {
  events: Eventing = new Eventing();
  rootUrl?: string;
  deserialize?: (json: K) => T;

  constructor(public models: T[] = []) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(models: T[]): void {
    this.models = models;
    if (!shallowEqualObjects(this.models, models)) {
      this.trigger("change");
    }
  }

  setRootUrl(rootUrl: string): void {
    this.rootUrl = rootUrl;
  }

  setDeserialize(deserialize: (json: K) => T): void {
    this.deserialize = deserialize;
  }

  get() {
    return this.models;
  }

  fetch(): void {
    if (this.rootUrl && this.deserialize) {
      axios.get(this.rootUrl).then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize!(value));
        });

        this.trigger("change");
      });
    } else {
      throw new Error("Rooturl or deserializer not set up");
    }
  }
}
