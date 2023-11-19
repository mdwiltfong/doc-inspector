import {
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner
} from "@gadgetinc/api-client-core";
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
async function createMessages(id, options) {
  return await actionRunner(
    this,
    "createMessages",
    DefaultMessagesSelection,
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
async function updateMessages(id, options) {
  return await actionRunner(
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
      }
    },
    options,
    null,
    false
  );
}
async function deleteMessages(id, options) {
  return await actionRunner(
    this,
    "deleteMessages",
    DefaultMessagesSelection,
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
        return await findOneRunner(
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
        const record = await findOneRunner(
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
        return await findManyRunner(
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
        const list = await findManyRunner(
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
        const list = await findManyRunner(
          this,
          "messagess",
          DefaultMessagesSelection,
          apiIdentifier,
          { ...options, first: 1, last: void 0, before: void 0, after: void 0 },
          false
        );
        return list?.[0] ?? null;
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
        return await findOneByFieldRunner(
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
    * Executes the bulkCreate action with the given inputs.
    */
    this.bulkCreate = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkCreateMessages",
          DefaultMessagesSelection,
          "messages",
          "messages",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkCreate"].variables["ids"]
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
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
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
    * Executes the bulkUpdate action with the given inputs.
    */
    this.bulkUpdate = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkUpdateMessages",
          DefaultMessagesSelection,
          "messages",
          "messages",
          true,
          {
            ids: {
              value: ids,
              ...this["bulkUpdate"].variables["ids"]
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
          ids: {
            required: true,
            type: "[GadgetID!]"
          }
        },
        hasReturnType: false,
        acceptsModelInput: false
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
        defaultSelection: DefaultMessagesSelection,
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
    * Executes the bulkDelete action with the given inputs.
    */
    this.bulkDelete = Object.assign(
      async (ids, options) => {
        return await actionRunner(
          this,
          "bulkDeleteMessages",
          DefaultMessagesSelection,
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
        defaultSelection: DefaultMessagesSelection,
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
  DefaultMessagesSelection,
  MessagesManager
};
//# sourceMappingURL=Messages.js.map
