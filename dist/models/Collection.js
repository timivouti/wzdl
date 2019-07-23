"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Eventing_1 = require("./Eventing");
var shallowEqual_1 = require("../utils/shallowEqual");
var Collection = /** @class */ (function () {
    function Collection(models) {
        if (models === void 0) { models = []; }
        this.models = models;
        this.events = new Eventing_1.Eventing();
    }
    Object.defineProperty(Collection.prototype, "on", {
        get: function () {
            return this.events.on;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "trigger", {
        get: function () {
            return this.events.trigger;
        },
        enumerable: true,
        configurable: true
    });
    Collection.prototype.set = function (models) {
        this.models = models;
        if (!shallowEqual_1.shallowEqualObjects(this.models, models)) {
            this.trigger("change");
        }
    };
    Collection.prototype.setRootUrl = function (rootUrl) {
        this.rootUrl = rootUrl;
    };
    Collection.prototype.setDeserialize = function (deserialize) {
        this.deserialize = deserialize;
    };
    Collection.prototype.get = function () {
        return this.models;
    };
    Collection.prototype.fetch = function () {
        var _this = this;
        if (this.rootUrl && this.deserialize) {
            axios_1.default.get(this.rootUrl).then(function (response) {
                response.data.forEach(function (value) {
                    _this.models.push(_this.deserialize(value));
                });
                _this.trigger("change");
            });
        }
        else {
            throw new Error("Rooturl or deserializer not set up");
        }
    };
    return Collection;
}());
exports.Collection = Collection;
