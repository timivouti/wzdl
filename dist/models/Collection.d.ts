import { Eventing } from "./Eventing";
export declare class Collection<T, K> {
    models: T[];
    events: Eventing;
    rootUrl?: string;
    deserialize?: (json: K) => T;
    constructor(models?: T[]);
    readonly on: (eventName: string, callback: import("..").Callback) => void;
    readonly trigger: (eventName: string) => void;
    set(models: T[]): void;
    setRootUrl(rootUrl: string): void;
    setDeserialize(deserialize: (json: K) => T): void;
    get(): T[];
    fetch(): void;
}
