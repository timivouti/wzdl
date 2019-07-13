"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shallowEqual_1 = require("../utils/shallowEqual");
var Model = /** @class */ (function () {
    function Model(attributes, events, sync) {
        this.attributes = attributes;
        this.events = events;
        this.sync = sync;
        this.on = this.events.on;
        this.trigger = this.events.trigger;
        this.get = this.attributes.get;
        this.getAll = this.attributes.getAll;
    }
    Model.prototype.set = function (update) {
        if (!shallowEqual_1.shallowEqualObjects(this.attributes.getAll(), update)) {
            this.attributes.set(update);
            this.events.trigger("change");
        }
    };
    Model.prototype.fetch = function () {
        var _this = this;
        var id = this.attributes.get("id");
        if (typeof id !== "number") {
            throw new Error("Cannot fetch without an id");
        }
        this.sync
            .fetch(id)
            .then(function (response) { return _this.set(response.data); })
            .catch(function () { return _this.trigger("error"); });
    };
    Model.prototype.save = function () {
        var _this = this;
        this.sync
            .save(this.attributes.getAll())
            .then(function () { return _this.trigger("save"); })
            .catch(function () { return _this.trigger("error"); });
    };
    return Model;
}());
exports.Model = Model;
