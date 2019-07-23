import { History } from "history";
import { View } from "./View";
import { Model } from "../models/Model";
import { RouteRegionsMap } from "../utils/types";
export declare abstract class Router<T extends Model<K>, K> extends View<T, K> {
    parent: Element;
    model: T;
    routeRegions: {
        [route: string]: {
            [key: string]: Element;
        };
    };
    private history;
    constructor(parent: Element, model: T);
    readonly location: History<any>;
    routeRegionsMap(): RouteRegionsMap;
    mapRegions(fragment: DocumentFragment): void;
    render(): void;
}
