import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(
    public parent: Element | null,
    public collection: Collection<T, K>
  ) {
    this.bindModel();
  }

  abstract renderItem(model: T, itemParent: Element): void;

  bindModel(): void {
    this.collection.on("change", () => this.render());
  }

  render(): void {
    if (this.parent) {
      this.parent.innerHTML = "";

      const templateElement = document.createElement("template");

      for (let model of this.collection.models) {
        const itemParent = document.createElement("div");
        this.renderItem(model, itemParent);
        templateElement.content.append(itemParent);
      }

      this.parent.append(templateElement.content);
    } else {
      throw new Error("Parent element for collection view was not found");
    }
  }
}
