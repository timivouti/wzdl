import { Collection } from "../models/Collection";
export declare abstract class CollectionView<T, K> {
    parent: Element | null;
    collection: Collection<T, K>;
    constructor(parent: Element | null, collection: Collection<T, K>);
    abstract renderItem(model: T, itemParent: Element): void;
    bindModel(): void;
    render(): void;
}
