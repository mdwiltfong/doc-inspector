import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, IDsList, Messages, MessagesSort, MessagesFilter, AvailableMessagesSelection } from "../types.js";
export declare const DefaultMessagesSelection: {
    readonly __typename: true;
    readonly assistant_id: true;
    readonly content: true;
    readonly createdAt: true;
    readonly file_ids: true;
    readonly id: true;
    readonly role: true;
    readonly run_id: true;
    readonly thread_id: true;
    readonly updatedAt: true;
};
/**
* Produce a type that holds only the selected fields (and nested fields) of "messages". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedMessagesOrDefault<Options extends Selectable<AvailableMessagesSelection>> = DeepFilterNever<Select<Messages, DefaultSelection<AvailableMessagesSelection, Options, typeof DefaultMessagesSelection>>>;
/** Options that can be passed to the `MessagesManager#findOne` method */
export interface FindOneMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
}
/** Options that can be passed to the `MessagesManager#maybeFindOne` method */
export interface MaybeFindOneMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
}
/** Options that can be passed to the `MessagesManager#findMany` method */
export interface FindManyMessagessOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
    /** Return records sorted by these sorts */
    sort?: MessagesSort | MessagesSort[] | null;
    /** Only return records matching these filters. */
    filter?: MessagesFilter | MessagesFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `MessagesManager#findFirst` method */
export interface FindFirstMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
    /** Return records sorted by these sorts */
    sort?: MessagesSort | MessagesSort[] | null;
    /** Only return records matching these filters. */
    filter?: MessagesFilter | MessagesFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `MessagesManager#maybeFindFirst` method */
export interface MaybeFindFirstMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
    /** Return records sorted by these sorts */
    sort?: MessagesSort | MessagesSort[] | null;
    /** Only return records matching these filters. */
    filter?: MessagesFilter | MessagesFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
}
export interface UpdateMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
}
export interface DeleteMessagesOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableMessagesSelection;
}
/**
 * The return value from executing create on messages.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateMessagesResult<Options extends CreateMessagesOptions> = SelectedMessagesOrDefault<Options> extends void ? void : GadgetRecord<SelectedMessagesOrDefault<Options>>;
/**
  * Executes the create action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function createMessages<Options extends CreateMessagesOptions>(id: string, options?: LimitToKnownKeys<Options, CreateMessagesOptions>): Promise<CreateMessagesResult<Options>>;
/**
 * The return value from executing update on messages.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateMessagesResult<Options extends UpdateMessagesOptions> = SelectedMessagesOrDefault<Options> extends void ? void : GadgetRecord<SelectedMessagesOrDefault<Options>>;
/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function updateMessages<Options extends UpdateMessagesOptions>(id: string, options?: LimitToKnownKeys<Options, UpdateMessagesOptions>): Promise<UpdateMessagesResult<Options>>;
/**
 * The return value from executing delete on messages.
 * "Is a GadgetRecord of the model's type."
 **/
export type DeleteMessagesResult<Options extends DeleteMessagesOptions> = SelectedMessagesOrDefault<Options> extends void ? void : GadgetRecord<SelectedMessagesOrDefault<Options>>;
/**
  * Executes the delete action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */
declare function deleteMessages<Options extends DeleteMessagesOptions>(id: string, options?: LimitToKnownKeys<Options, DeleteMessagesOptions>): Promise<DeleteMessagesResult<Options>>;
/** All the actions available at the collection level and record level for "messages" */
export declare class MessagesManager {
    readonly connection: GadgetConnection;
    constructor(connection: GadgetConnection);
    /**
 * Finds one messages by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    findOne: {
        <Options extends FindOneMessagesOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneMessagesOptions>): Promise<GadgetRecord<SelectedMessagesOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "messages";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: FindOneMessagesOptions;
        schemaType: Query["messages"];
    };
    /**
 * Finds one messages by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
    maybeFindOne: {
        <Options extends MaybeFindOneMessagesOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneMessagesOptions>): Promise<GadgetRecord<SelectedMessagesOrDefault<Options>> | null>;
        type: "maybeFindOne";
        findByVariableName: "id";
        operationName: "messages";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: MaybeFindOneMessagesOptions;
        schemaType: Query["messages"];
    };
    /**
 * Finds many messages. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findMany: {
        <Options extends FindManyMessagessOptions>(options?: LimitToKnownKeys<Options, FindManyMessagessOptions>): Promise<GadgetRecordList<SelectedMessagesOrDefault<Options>>>;
        type: "findMany";
        operationName: "messagess";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: FindManyMessagessOptions;
        schemaType: Query["messages"];
    };
    /**
 * Finds the first matching messages. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
    findFirst: {
        <Options extends FindFirstMessagesOptions>(options?: LimitToKnownKeys<Options, FindFirstMessagesOptions>): Promise<GadgetRecord<SelectedMessagesOrDefault<Options>>>;
        type: "findFirst";
        operationName: "messagess";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: FindFirstMessagesOptions;
        schemaType: Query["messages"];
    };
    /**
 * Finds the first matching messages. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
    maybeFindFirst: {
        <Options extends MaybeFindFirstMessagesOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstMessagesOptions>): Promise<GadgetRecord<SelectedMessagesOrDefault<Options>> | null>;
        type: "maybeFindFirst";
        operationName: "messagess";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: MaybeFindFirstMessagesOptions;
        schemaType: Query["messages"];
    };
    /**
  * Finds one messages by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
    findById: {
        <Options extends FindOneMessagesOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneMessagesOptions>): Promise<GadgetRecord<SelectedMessagesOrDefault<Options>>>;
        type: "findOne";
        findByVariableName: "id";
        operationName: "messagess";
        modelApiIdentifier: "messages";
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: FindOneMessagesOptions;
        schemaType: Query["messages"];
    };
    create: typeof createMessages & {
        type: "action";
        operationName: "createMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: false;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: CreateMessagesOptions;
        schemaType: Query["messages"];
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkCreate action with the given inputs.
*/
    bulkCreate: {
        <Options extends CreateMessagesOptions>(ids: string[], options?: LimitToKnownKeys<Options, CreateMessagesOptions>): Promise<CreateMessagesResult<Options>[]>;
        type: "action";
        operationName: "bulkCreateMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: true;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: CreateMessagesOptions;
        schemaType: Query["messages"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    update: typeof updateMessages & {
        type: "action";
        operationName: "updateMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: false;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: UpdateMessagesOptions;
        schemaType: Query["messages"];
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkUpdate action with the given inputs.
*/
    bulkUpdate: {
        <Options extends UpdateMessagesOptions>(ids: string[], options?: LimitToKnownKeys<Options, UpdateMessagesOptions>): Promise<UpdateMessagesResult<Options>[]>;
        type: "action";
        operationName: "bulkUpdateMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: true;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: UpdateMessagesOptions;
        schemaType: Query["messages"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
    delete: typeof deleteMessages & {
        type: "action";
        operationName: "deleteMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: false;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: DeleteMessagesOptions;
        schemaType: Query["messages"];
        variablesType: ({
            id: string;
        } & {}) | undefined;
        variables: {
            id: {
                required: true;
                type: "GadgetID";
            };
        };
        hasAmbiguousIdentifier: false;
        /** @deprecated -- effects are dead, long live AAC */
        hasCreateOrUpdateEffect: false;
        paramOnlyVariables: [];
        hasReturnType: false;
        acceptsModelInput: false;
    };
    /**
* Executes the bulkDelete action with the given inputs.
*/
    bulkDelete: {
        <Options extends DeleteMessagesOptions>(ids: string[], options?: LimitToKnownKeys<Options, DeleteMessagesOptions>): Promise<DeleteMessagesResult<Options>[]>;
        type: "action";
        operationName: "bulkDeleteMessages";
        namespace: null;
        modelApiIdentifier: "messages";
        modelSelectionField: "messages";
        isBulk: true;
        defaultSelection: typeof DefaultMessagesSelection;
        selectionType: AvailableMessagesSelection;
        optionsType: DeleteMessagesOptions;
        schemaType: Query["messages"];
        variablesType: IDsList | undefined;
        variables: {
            ids: {
                required: true;
                type: "[GadgetID!]";
            };
        };
        hasReturnType: boolean;
        acceptsModelInput: boolean;
    };
}
export {};
