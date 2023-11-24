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
var Document_exports = {};
__export(Document_exports, {
  DefaultDocumentSelection: () => DefaultDocumentSelection,
  DocumentManager: () => DocumentManager
});
module.exports = __toCommonJS(Document_exports);
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_support = require("../support.js");
const DefaultDocumentSelection = {
  "__typename": true,
  "createdAt": true,
  "file": {
    "mimeType": true,
    "url": true
  },
  "id": true,
  "role": true,
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
const apiIdentifier = "document";
const pluralApiIdentifier = "documents";
async function createDocument(variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["create"],
    void 0,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "createDocument",
    DefaultDocumentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "document": {
        value: newVariables.document,
        required: false,
        type: "CreateDocumentInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateDocument(id, variables, options) {
  const newVariables = (0, import_support.disambiguateActionParams)(
    this["update"],
    id,
    variables
  );
  return await (0, import_api_client_core.actionRunner)(
    this,
    "updateDocument",
    DefaultDocumentSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "document": {
        value: newVariables.document,
        required: false,
        type: "UpdateDocumentInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteDocument(id, options) {
  return await (0, import_api_client_core.actionRunner)(
    this,
    "deleteDocument",
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
class DocumentManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one document by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await (0, import_api_client_core.findOneRunner)(
          this,
          "document",
          id,
          DefaultDocumentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "document",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultDocumentSelection
      }
    );
    /**
    * Finds one document by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await (0, import_api_client_core.findOneRunner)(
          this,
          "document",
          id,
          DefaultDocumentSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "document",
        modelApiIdentifier: "document",
        defaultSelection: DefaultDocumentSelection
      }
    );
    /**
    * Finds many document. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await (0, import_api_client_core.findManyRunner)(
          this,
          "documents",
          DefaultDocumentSelection,
          "document",
          options
        );
      },
      {
        type: "findMany",
        operationName: "documents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultDocumentSelection
      }
    );
    /**
    * Finds the first matching document. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "documents",
          DefaultDocumentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "documents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultDocumentSelection
      }
    );
    /**
    * Finds the first matching document. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await (0, import_api_client_core.findManyRunner)(
          this,
          "documents",
          DefaultDocumentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return (list == null ? void 0 : list[0]) ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "documents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultDocumentSelection
      }
    );
    /**
    * Finds one document by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await (0, import_api_client_core.findOneByFieldRunner)(
          this,
          "documents",
          "id",
          value,
          DefaultDocumentSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "documents",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultDocumentSelection
      }
    );
    this.create = Object.assign(
      createDocument,
      {
        type: "action",
        operationName: "createDocument",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultDocumentSelection,
        variables: {
          "document": {
            required: false,
            type: "CreateDocumentInput"
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
          "bulkCreateDocuments",
          DefaultDocumentSelection,
          "document",
          "documents",
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
        operationName: "bulkCreateDocuments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "documents",
        isBulk: true,
        defaultSelection: DefaultDocumentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateDocumentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateDocument,
      {
        type: "action",
        operationName: "updateDocument",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultDocumentSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "document": {
            required: false,
            type: "UpdateDocumentInput"
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
          "bulkUpdateDocuments",
          DefaultDocumentSelection,
          "document",
          "documents",
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
        operationName: "bulkUpdateDocuments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "documents",
        isBulk: true,
        defaultSelection: DefaultDocumentSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateDocumentsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteDocument,
      {
        type: "action",
        operationName: "deleteDocument",
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
          "bulkDeleteDocuments",
          null,
          "document",
          "documents",
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
        operationName: "bulkDeleteDocuments",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "documents",
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
  DefaultDocumentSelection,
  DocumentManager
});
//# sourceMappingURL=Document.js.map
