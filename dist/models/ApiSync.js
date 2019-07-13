"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var ApiSync = /** @class */ (function () {
    function ApiSync(rootUrl) {
        this.rootUrl = rootUrl;
    }
    ApiSync.prototype.fetch = function (id) {
        return axios_1.default.get(this.rootUrl + "/" + id);
    };
    ApiSync.prototype.save = function (data) {
        var id = data.id;
        if (id) {
            return axios_1.default.put(this.rootUrl + "/" + id, data);
        }
        else {
            return axios_1.default.post(this.rootUrl, data);
        }
    };
    return ApiSync;
}());
exports.ApiSync = ApiSync;
