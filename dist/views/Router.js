"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var history_1 = require("history");
var View_1 = require("./View");
var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(parent, model) {
        var _this = _super.call(this, parent, model) || this;
        _this.parent = parent;
        _this.model = model;
        _this.routeRegions = {};
        _this.history = history_1.createBrowserHistory();
        return _this;
    }
    Object.defineProperty(Router.prototype, "location", {
        get: function () {
            return this.history;
        },
        enumerable: true,
        configurable: true
    });
    Router.prototype.routeRegionsMap = function () {
        return {};
    };
    Router.prototype.mapRegions = function (fragment) {
        var _this = this;
        var routeRegionsMap = this.routeRegionsMap();
        var routeRegionsMapKeys = Object.keys(routeRegionsMap);
        var regionsMap = routeRegionsMap[routeRegionsMapKeys.find(function (route) { return route === _this.history.location.pathname; }) || routeRegionsMapKeys[0]];
        for (var key in regionsMap) {
            var selector = regionsMap[key];
            var element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    };
    Router.prototype.render = function () {
        this.parent.innerHTML = "";
        var templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);
        this.onRender();
        this.parent.append(templateElement.content);
    };
    return Router;
}(View_1.View));
exports.Router = Router;
