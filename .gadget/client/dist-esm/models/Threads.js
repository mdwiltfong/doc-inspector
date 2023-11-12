import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultThreadsSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "metadata": true,
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
const apiIdentifier = "threads";
const pluralApiIdentifier = "threadss";
async function createThreads(variables, options) {
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
    this,
    "createThreads",
    DefaultThreadsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      "threads": {
        value: newVariables.threads,
        required: false,
        type: "CreateThreadsInput"
      }
    },
    options,
    null,
    false
  );
}
async function updateThreads(id, variables, options) {
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
    this,
    "updateThreads",
    DefaultThreadsSelection,
    apiIdentifier,
    apiIdentifier,
    false,
    {
      id: {
        value: id,
        required: true,
        type: "GadgetID"
      },
      "threads": {
        value: newVariables.threads,
        required: false,
        type: "UpdateThreadsInput"
      }
    },
    options,
    null,
    false
  );
}
async function deleteThreads(id, options) {
  return await actionRunner(
    this,
    "deleteThreads",
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
class ThreadsManager {
  constructor(connection) {
    this.connection = connection;
    /**
    * Finds one threads by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findOne = Object.assign(
      async (id, options) => {
        return await findOneRunner(
          this,
          "threads",
          id,
          DefaultThreadsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "threads",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultThreadsSelection
      }
    );
    /**
    * Finds one threads by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.maybeFindOne = Object.assign(
      async (id, options) => {
        const record = await findOneRunner(
          this,
          "threads",
          id,
          DefaultThreadsSelection,
          apiIdentifier,
          options,
          false
        );
        return record.isEmpty() ? null : record;
      },
      {
        type: "maybeFindOne",
        findByVariableName: "id",
        operationName: "threads",
        modelApiIdentifier: "threads",
        defaultSelection: DefaultThreadsSelection
      }
    );
    /**
    * Finds many threads. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findMany = Object.assign(
      async (options) => {
        return await findManyRunner(
          this,
          "threadss",
          DefaultThreadsSelection,
          "threads",
          options
        );
      },
      {
        type: "findMany",
        operationName: "threadss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultThreadsSelection
      }
    );
    /**
    * Finds the first matching threads. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
    **/
    this.findFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "threadss",
          DefaultThreadsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          true
        );
        return list[0];
      },
      {
        type: "findFirst",
        operationName: "threadss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultThreadsSelection
      }
    );
    /**
    * Finds the first matching threads. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
    **/
    this.maybeFindFirst = Object.assign(
      async (options) => {
        const list = await findManyRunner(
          this,
          "threadss",
          DefaultThreadsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
      },
      {
        type: "maybeFindFirst",
        operationName: "threadss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultThreadsSelection
      }
    );
    /**
    * Finds one threads by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
    **/
    this.findById = Object.assign(
      async (value, options) => {
        return await findOneByFieldRunner(
          this,
          "threadss",
          "id",
          value,
          DefaultThreadsSelection,
          apiIdentifier,
          options
        );
      },
      {
        type: "findOne",
        findByVariableName: "id",
        operationName: "threadss",
        modelApiIdentifier: apiIdentifier,
        defaultSelection: DefaultThreadsSelection
      }
    );
    this.create = Object.assign(
      createThreads,
      {
        type: "action",
        operationName: "createThreads",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultThreadsSelection,
        variables: {
          "threads": {
            required: false,
            type: "CreateThreadsInput"
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
          "bulkCreateThreads",
          DefaultThreadsSelection,
          "threads",
          "threads",
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
        operationName: "bulkCreateThreads",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "threads",
        isBulk: true,
        defaultSelection: DefaultThreadsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkCreateThreadsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.update = Object.assign(
      updateThreads,
      {
        type: "action",
        operationName: "updateThreads",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: apiIdentifier,
        isBulk: false,
        defaultSelection: DefaultThreadsSelection,
        variables: {
          id: {
            required: true,
            type: "GadgetID"
          },
          "threads": {
            required: false,
            type: "UpdateThreadsInput"
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
          "bulkUpdateThreads",
          DefaultThreadsSelection,
          "threads",
          "threads",
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
        operationName: "bulkUpdateThreads",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "threads",
        isBulk: true,
        defaultSelection: DefaultThreadsSelection,
        variables: {
          inputs: {
            required: true,
            type: "[BulkUpdateThreadsInput!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: true
      }
    );
    this.delete = Object.assign(
      deleteThreads,
      {
        type: "action",
        operationName: "deleteThreads",
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
          "bulkDeleteThreads",
          null,
          "threads",
          "threads",
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
        operationName: "bulkDeleteThreads",
        namespace: null,
        modelApiIdentifier: apiIdentifier,
        modelSelectionField: "threads",
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
  DefaultThreadsSelection,
  ThreadsManager
};
//# sourceMappingURL=Threads.js.map
