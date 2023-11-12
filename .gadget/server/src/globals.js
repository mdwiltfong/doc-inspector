"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    actionContextLocalStorage: function() {
        return actionContextLocalStorage;
    },
    Globals: function() {
        return Globals;
    }
});
function _async_hooks() {
    const data = require("async_hooks");
    _async_hooks = function() {
        return data;
    };
    return data;
}
const actionContextLocalStorage = new (_async_hooks()).AsyncLocalStorage();
const platformModuleRequirer = (name)=>{
    let mod = null;
    return ()=>{
        if (!mod) {
            if (!Globals.platformRequire) throw new Error("Globals.platformRequire is not set, has it been injected by the sandbox yet?");
            mod = Globals.platformRequire(name);
        }
        return mod;
    };
};
const Globals = {
    /**
   * Internal variable to store the model validator function, set in `set` by the `AppBridge`.
   * @internal
   */ modelValidator: null,
    /**
   * Internal variable to store the request context module, set in `set` by the `AppBridge`.
   * @internal
   */ requestContext: null,
    /**
   * @internal
   */ logger: null,
    /**
   * Require function for importing code from the gadget platform context instead of the app's context.
   * @internal
   */ platformRequire: null,
    /**
   * This is used internally to set the globals for this instance of the framework package.
   * @internal
   */ set (globals) {
        Object.assign(this, globals);
    },
    /**
   * Lazy-loaded modules for use in the framework package from the gadget platform context.
   * @internal
   */ platformModules: {
        lodash: platformModuleRequirer("lodash"),
        bcrypt: platformModuleRequirer("bcrypt")
    }
};
