"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CollectionView = /** @class */ (function () {
    function CollectionView(parent, collection) {
        this.parent = parent;
        this.collection = collection;
        this.bindModel();
    }
    CollectionView.prototype.bindModel = function () {
        var _this = this;
        this.collection.on("change", function () { return _this.render(); });
    };
    CollectionView.prototype.render = function () {
        if (this.parent) {
            this.parent.innerHTML = "";
            var templateElement = document.createElement("template");
            for (var _i = 0, _a = this.collection.models; _i < _a.length; _i++) {
                var model = _a[_i];
                var itemParent = document.createElement("div");
                this.renderItem(model, itemParent);
                templateElement.content.append(itemParent);
            }
            this.parent.append(templateElement.content);
        }
        else {
            throw new Error("Parent element for collection view was not found");
        }
    };
    return CollectionView;
}());
exports.CollectionView = CollectionView;
