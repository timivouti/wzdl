import { Eventing } from "./Eventing";
export declare class Collection<T, K> {
    models: T[];
    events: Eventing;
    constructor(models?: T[]);
    readonly on: (eventName: string, callback: import("..").Callback) => void;
    readonly trigger: (eventName: string) => void;
    set(models: T[]): void;
    get(): T[];
    fetch(rootUrl: string, deserialize: (json: K) => T): void;
}
