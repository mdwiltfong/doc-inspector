"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Messages_exports = {};
__export(Messages_exports, {
  DefaultMessagesSelection: () => DefaultMessagesSelection,
  MessagesManager: () => MessagesManager
});
module.exports = __toCommonJS(Messages_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultMessagesSelection = {
  "__typename": true,
  "assistant_id": true,
  "content": true,
  "createdAt": true,
  "file_ids": true,
  "id": true,
  "role": true,
  "run_id": true,
  "thread_id": true,
  "updatedAt": true
};
;
;
;
;
;
;
;
;
const apiIdentifier = "messages";
const pluralApiIdentifier = "messagess";
async function createMessages(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createMessages",
    DefaultMessagesSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "messages": {
        value: newVariables.messages,
        required: false,
        type: "CreateMessagesInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateMessages(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateMessages",
    DefaultMessagesSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "messages": {
        value: newVariables.messages,
        required: false,
        type: "UpdateMessagesInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteMessages(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteMessages",
    null,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      }
    },
    options,
    null,
    false
  );
}
class MessagesManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one messages by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "messages",
          id,
          DefaultMessagesSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "messages",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultMessagesSelection
      }
    );
    /**
    * Finds one messages by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "messages",
          id,
          DefaultMessagesSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "messages",
        modelApiIdentifier: "messages",
        defaultSelection: DefaultMessagesSelection
      }
    );
    /**
    * Finds many messages. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "messagess",
          DefaultMessagesSelection,
          "messages",
          options
        );
      },
      {
        type: "findMany",
        operationName: "messagess",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultMessagesSelection
      }
    );
    /**
    * Finds the first matching messages. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "messagess",
          DefaultMessagesSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "messagess",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultMessagesSelection
      }
    );
    /**
    * Finds the first matching messages. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "messagess",
          DefaultMessagesSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "messagess",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultMessagesSelection
      }
    );
    /**
    * Finds one messages by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "messagess",
          "id",
          value,
          DefaultMessagesSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "messagess",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultMessagesSelection
      }
    );
    this.create = Object.assign(
      createMessages,
      {
        type: "action",
        operationName: "createMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultMessagesSelection,
        variables: {
          "messages": {
            required: false,
            type: "CreateMessagesInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["create"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkCreateMessages",
          DefaultMessagesSelection,
          "messages",
          "messages",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkCreate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkCreateMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "messages",
        isBulk: true,
        defaultSelection: DefaultMessagesSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateMessagesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateMessages,
      {
        type: "action",
        operationName: "updateMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultMessagesSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "messages": {
            required: false,
            type: "UpdateMessagesInput"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: true,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    /**
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (inputs, options) => {
        const fullyQualifiedInputs = inputs.map(
          (input) => (0, import_support.disambiguateActionParams)(
            this["update"],
            void 0,
            input
          )
        );
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkUpdateMessages",
          DefaultMessagesSelection,
          "messages",
          "messages",
          true,
          {
            inputs: {
              value: fullyQualifiedInputs,
              ...this["bulkUpdate"].variables["inputs"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkUpdateMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "messages",
        isBulk: true,
        defaultSelection: DefaultMessagesSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateMessagesInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteMessages,
      {
        type: "action",
        operationName: "deleteMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: null,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          }
        },
        hasAmbiguousIdentifier: false,
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false,
        paramOnlyVariables: [],
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
    /**
    * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await (0, import_api_client_core.actionRunner)(
          this,
          "bulkDeleteMessages",
          null,
          "messages",
          "messages",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkDelete"].variables["ids"]
            }
          },
          options,
          null,
          false
        );
      },
      {
        type: "action",
        operationName: "bulkDeleteMessages",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "messages",
        isBulk: true,
        defaultSelection: null,
        variables: {
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
      }
    );
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultMessagesSelection,
  MessagesManager
});
//# sourceMappingURL=Messages.js.map
