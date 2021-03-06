import { AxiosPromise, AxiosResponse } from "axios";
import { shallowEqualObjects } from "../utils/shallowEqual";

type Callback = () => void;

interface ModelAttributes<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
  getAll = this.attributes.getAll;

  set(update: T): void {
    this.attributes.set(update);
    if (!shallowEqualObjects(this.attributes.getAll(), update)) {
      this.events.trigger("change");
    }
  }

  fetch(): void {
    const id = this.attributes.get("id");

    if (typeof id !== "number") {
      throw new Error("Cannot fetch without an id");
    }

    this.sync
      .fetch(id)
      .then((response: AxiosResponse): void => this.set(response.data))
      .catch((): void => this.trigger("error"));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((): void => this.trigger("save"))
      .catch((): void => this.trigger("error"));
  }
}
