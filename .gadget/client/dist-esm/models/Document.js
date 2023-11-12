import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultDocumentSelection = {
  "__typename": true,
  "createdAt": true,
  "file": true,
  "id": true,
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
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
  return await actionRunner(
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "documents",
          DefaultDocumentSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
        return await findOneByFieldRunner(
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
        return await actionRunner(
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
export {
  DefaultDocumentSelection,
  DocumentManager
};
//# sourceMappingURL=Document.js.map
