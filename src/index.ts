import { Collection } from "./models/Collection";
import { CollectionView } from "./views/CollectionView";
import { View } from "./views/View";
import { ApiSync } from "./models/ApiSync";
import { Attributes } from "./models/Attributes";
import { Eventing } from "./models/Eventing";
import { Model } from "./models/Model";
import { EventsMap, Callback, RegionsMap } from "./utils/types";
import { shallowEqualObjects } from "./utils/shallowEqual";

const DOMRender = <T extends Model<K>, K, V extends View<T, K>>(
  constructorFn: new (parentItem: Element, model: T) => V,
  model: T
): V => {
  const root = document.getElementById("root");
  if (root) {
    const rootItem = new constructorFn(root, model);
    rootItem.render();
    return rootItem;
  } else {
    throw new Error("Root div not found");
  }
};

export {
  DOMRender,
  View,
  CollectionView,
  ApiSync,
  Attributes,
  Collection,
  Eventing,
  Model,
  EventsMap,
  RegionsMap,
  shallowEqualObjects,
  Callback
};
