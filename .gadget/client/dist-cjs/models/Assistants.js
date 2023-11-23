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
var Assistants_exports = {};
__export(Assistants_exports, {
  AssistantsManager: () => AssistantsManager,
  DefaultAssistantsSelection: () => DefaultAssistantsSelection
});
module.exports = __toCommonJS(Assistants_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultAssistantsSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "instructions": true,
  "name": true,
  "openAiId": true,
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
const apiIdentifier = "assistants";
const pluralApiIdentifier = "assistantss";
async function createAssistants(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createAssistants",
    DefaultAssistantsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "assistants": {
        value: newVariables.assistants,
        required: false,
        type: "CreateAssistantsInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateAssistants(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateAssistants",
    DefaultAssistantsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "assistants": {
        value: newVariables.assistants,
        required: false,
        type: "UpdateAssistantsInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteAssistants(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteAssistants",
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
class AssistantsManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one assistants by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "assistants",
          id,
          DefaultAssistantsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "assistants",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAssistantsSelection
      }
    );
    /**
    * Finds one assistants by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "assistants",
          id,
          DefaultAssistantsSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "assistants",
        modelApiIdentifier: "assistants",
        defaultSelection: DefaultAssistantsSelection
      }
    );
    /**
    * Finds many assistants. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "assistantss",
          DefaultAssistantsSelection,
          "assistants",
          options
        );
      },
      {
        type: "findMany",
        operationName: "assistantss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAssistantsSelection
      }
    );
    /**
    * Finds the first matching assistants. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "assistantss",
          DefaultAssistantsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "assistantss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAssistantsSelection
      }
    );
    /**
    * Finds the first matching assistants. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "assistantss",
          DefaultAssistantsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "assistantss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAssistantsSelection
      }
    );
    /**
    * Finds one assistants by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "assistantss",
          "id",
          value,
          DefaultAssistantsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "assistantss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultAssistantsSelection
      }
    );
    this.create = Object.assign(
      createAssistants,
      {
        type: "action",
        operationName: "createAssistants",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultAssistantsSelection,
        variables: {
          "assistants": {
            required: false,
            type: "CreateAssistantsInput"
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
          "bulkCreateAssistants",
          DefaultAssistantsSelection,
          "assistants",
          "assistants",
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
        operationName: "bulkCreateAssistants",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "assistants",
        isBulk: true,
        defaultSelection: DefaultAssistantsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateAssistantsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateAssistants,
      {
        type: "action",
        operationName: "updateAssistants",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultAssistantsSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "assistants": {
            required: false,
            type: "UpdateAssistantsInput"
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
          "bulkUpdateAssistants",
          DefaultAssistantsSelection,
          "assistants",
          "assistants",
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
        operationName: "bulkUpdateAssistants",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "assistants",
        isBulk: true,
        defaultSelection: DefaultAssistantsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateAssistantsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteAssistants,
      {
        type: "action",
        operationName: "deleteAssistants",
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
          "bulkDeleteAssistants",
          null,
          "assistants",
          "assistants",
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
        operationName: "bulkDeleteAssistants",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "assistants",
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
  AssistantsManager,
  DefaultAssistantsSelection
});
//# sourceMappingURL=Assistants.js.map
