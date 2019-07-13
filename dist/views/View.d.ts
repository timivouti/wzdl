import { Model } from "../models/Model";
import { EventsMap } from "../utils/types";
export declare abstract class View<T extends Model<K>, K> {
    parent: Element;
    model: T;
    regions: {
        [key: string]: Element;
    };
    constructor(parent: Element, model: T);
    abstract template(): string;
    regionsMap(): {
        [key: string]: string;
    };
    eventsMap(): EventsMap;
    bindModel(): void;
    bindEvents(fragment: DocumentFragment): void;
    mapRegions(fragment: DocumentFragment): void;
    onRender(): void;
    render(): void;
}
