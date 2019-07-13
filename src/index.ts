import { Collection } from "./models/Collection";
import { CollectionView } from "./views/CollectionView";
import { View } from "./views/View";
import { ApiSync } from "./models/ApiSync";
import { Attributes } from "./models/Attributes";
import { Eventing } from "./models/Eventing";
import { Model } from "./models/Model";

const DOMRender = <T extends Model<K>, K>(containerView: View<T, K>): void => {
  containerView.render();
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
