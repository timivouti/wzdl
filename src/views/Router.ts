import { createBrowserHistory, History } from "history";
import { View } from "./View";
import { Model } from "../models/Model";
import { RouteRegionsMap } from "../utils/types";

export abstract class Router<T extends Model<K>, K> extends View<T, K> {
  routeRegions: { [route: string]: { [key: string]: Element } } = {};
  private browserHistory: History<any> = createBrowserHistory();

  constructor(public parent: Element, public model: T) {
    super(parent, model);
    const unlisten = this.browserHistory.listen((location, action) => {
      console.log(action, location.pathname, location.state);
      this.render();
    });

    document.addEventListener("beforeunload", () => unlisten());
  }

  get history() {
    return this.browserHistory;
  }

  routeRegionsMap(): RouteRegionsMap {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const routeRegionsMap = this.routeRegionsMap();
    const routeRegionsMapKeys = Object.keys(routeRegionsMap);
    const regionsMap =
      routeRegionsMap[
        routeRegionsMapKeys.find(
          route => route === this.history.location.pathname
        ) || routeRegionsMapKeys[0]
      ];

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[key] = element;
      }
    }
  }

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}
