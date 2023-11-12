"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Session", {
    enumerable: true,
    get: function() {
        return Session;
    }
});
const $storage = Symbol("object");
class Session {
    _id;
    static fromInput(input) {
        if (input) {
            return new Session(input.id, input);
        }
    }
    changedKeys;
    ended;
    [$storage];
    constructor(_id, obj){
        this._id = _id;
        this.changedKeys = new Set();
        this.ended = false;
        this[$storage] = obj;
    }
    get(key) {
        return this[$storage][key];
    }
    set(key, value) {
        this.changedKeys.add(key);
        this[$storage][key] = value;
    }
    delete(key) {
        this.changedKeys.add(key);
        this[$storage][key] = null;
    }
    end() {
        this.changedKeys.add("id");
        this.ended = true;
    }
    clearChanges() {
        this.changedKeys.clear();
    }
    get changed() {
        return this.changedKeys.size > 0;
    }
    toJSON() {
        return this[$storage];
    }
    toChangedJSON() {
        const changes = {};
        for (const key of this.changedKeys){
            changes[key] = this[$storage][key];
        }
        return changes;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
        this.set("id", this._id);
    }
}
