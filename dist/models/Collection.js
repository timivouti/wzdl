"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var Eventing_1 = require("./Eventing");
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
        this.trigger("change");
    };
    Collection.prototype.get = function () {
        return this.models;
    };
    Collection.prototype.fetch = function (rootUrl, deserialize) {
        var _this = this;
        axios_1.default.get(rootUrl).then(function (response) {
            response.data.forEach(function (value) {
                _this.models.push(deserialize(value));
            });
            _this.trigger("change");
        });
    };
    return Collection;
}());
exports.Collection = Collection;
