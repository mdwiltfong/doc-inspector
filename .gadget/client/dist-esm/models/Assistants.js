import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
import { disambiguateActionParams } from "../support.js";
const DefaultAssistantsSelection = {
  "__typename": true,
  "createdAt": true,
  "file_ids": true,
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
  const newVariables = disambiguateActionParams(
    this["create"],
    void 0,
    variables
  );
  return await actionRunner(
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
  const newVariables = disambiguateActionParams(
    this["update"],
    id,
    variables
  );
  return await actionRunner(
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
  return await actionRunner(
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "assistantss",
          DefaultAssistantsSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
        return await findOneByFieldRunner(
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
          (input) => disambiguateActionParams(
            this["create"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
          (input) => disambiguateActionParams(
            this["update"],
            void 0,
            input
          )
        );
        return await actionRunner(
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
        return await actionRunner(
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
export {
  AssistantsManager,
  DefaultAssistantsSelection
};
//# sourceMappingURL=Assistants.js.map
