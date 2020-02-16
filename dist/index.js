"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class SafeJsonObjectId {
    constructor() {
        this.__type = 'ObjectId';
    }
}
exports.SafeJsonObjectId = SafeJsonObjectId;
class SafeJsonPluginObjectId {
    constructor(useString = true) {
        this.type = 'ObjectId';
        this._useString = useString;
    }
    condition(obj) {
        return obj instanceof mongodb_1.ObjectId;
    }
    serialize(obj) {
        if (this._useString) {
            return obj.toHexString();
        }
        else {
            return {
                __type: 'ObjectId',
                id: obj.toHexString()
            };
        }
    }
    deserialize(obj) {
        if (!this._useString && obj.id) {
            return new mongodb_1.ObjectId(obj.id);
        }
        return obj;
    }
}
exports.SafeJsonPluginObjectId = SafeJsonPluginObjectId;
