export type Callback = () => void;
export type EventsMap = { [key: string]: () => void };
export type RegionsMap = { [key: string]: string };
export type RouteRegionsMap = { [route: string]: { [key: string]: string } };
