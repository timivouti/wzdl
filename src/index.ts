import { Collection } from "./models/Collection";
import { CollectionView } from "./views/CollectionView";
import { View } from "./views/View";
import { ApiSync } from "./models/ApiSync";
import { Attributes } from "./models/Attributes";
import { Eventing } from "./models/Eventing";
import { Model } from "./models/Model";

const DOMRender = <T, K>(collectionView: CollectionView<T, K>): void => {
  //collectionView.collection.on("change", () => collectionView.render());
  collectionView.render();
};

export {
  DOMRender,
  View,
  CollectionView,
  ApiSync,
  Attributes,
  Collection,
  Eventing,
  Model
};
