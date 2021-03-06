"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collection_1 = require("./models/Collection");
exports.Collection = Collection_1.Collection;
var CollectionView_1 = require("./views/CollectionView");
exports.CollectionView = CollectionView_1.CollectionView;
var View_1 = require("./views/View");
exports.View = View_1.View;
var ApiSync_1 = require("./models/ApiSync");
exports.ApiSync = ApiSync_1.ApiSync;
var Attributes_1 = require("./models/Attributes");
exports.Attributes = Attributes_1.Attributes;
var Eventing_1 = require("./models/Eventing");
exports.Eventing = Eventing_1.Eventing;
var Model_1 = require("./models/Model");
exports.Model = Model_1.Model;
var shallowEqual_1 = require("./utils/shallowEqual");
exports.shallowEqualObjects = shallowEqual_1.shallowEqualObjects;
var Router_1 = require("./views/Router");
exports.Router = Router_1.Router;
var DOMRender = function (constructorFn, model) {
    var root = document.getElementById("root");
    if (root) {
        var rootItem = new constructorFn(root, model);
        rootItem.render();
        return rootItem;
    }
    else {
        throw new Error("Root div not found");
    }
};
exports.DOMRender = DOMRender;
