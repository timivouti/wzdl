import { Callback } from "../utils/types";
export declare class Eventing {
    events: {
        [key: string]: Callback[];
    };
    on: (eventName: string, callback: Callback) => void;
    trigger: (eventName: string) => void;
}
