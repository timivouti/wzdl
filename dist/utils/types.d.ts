export declare type Callback = () => void;
export declare type EventsMap = {
    [key: string]: () => void;
};
export declare type RegionsMap = {
    [key: string]: string;
};
export declare type RouteRegionsMap = {
    [route: string]: {
        [key: string]: string;
    };
};
