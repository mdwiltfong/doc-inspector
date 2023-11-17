import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
      Threads,
      ThreadsSort,
      ThreadsFilter,
      AvailableThreadsSelection,
      CreateThreadsInput,
      UpdateThreadsInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultThreadsSelection = {
  "__typename": true,
  "createdAt": true,
  "external_id": true,
  "id": true,
  "metadata": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "threads". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedThreadsOrDefault<Options extends Selectable<AvailableThreadsSelection>> = DeepFilterNever<
  Select<
    Threads,
    DefaultSelection<
      AvailableThreadsSelection,
      Options,
      typeof DefaultThreadsSelection
    >
  >>;

/** Options that can be passed to the `ThreadsManager#findOne` method */
export interface FindOneThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
};

/** Options that can be passed to the `ThreadsManager#maybeFindOne` method */
export interface MaybeFindOneThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
};

/** Options that can be passed to the `ThreadsManager#findMany` method */
export interface FindManyThreadssOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
  /** Return records sorted by these sorts */
  sort?: ThreadsSort | ThreadsSort[] | null;
  /** Only return records matching these filters. */
  filter?: ThreadsFilter | ThreadsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `ThreadsManager#findFirst` method */
export interface FindFirstThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
  /** Return records sorted by these sorts */
  sort?: ThreadsSort | ThreadsSort[] | null;
  /** Only return records matching these filters. */
  filter?: ThreadsFilter | ThreadsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `ThreadsManager#maybeFindFirst` method */
export interface MaybeFindFirstThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
  /** Return records sorted by these sorts */
  sort?: ThreadsSort | ThreadsSort[] | null;
  /** Only return records matching these filters. */
  filter?: ThreadsFilter | ThreadsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
};


export interface UpdateThreadsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableThreadsSelection;
};


export interface DeleteThreadsOptions {
};


const apiIdentifier = "threads";
const pluralApiIdentifier = "threadss";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateThreadsVariables = {
          threads?: CreateThreadsInput,
      }

  /**
   * The inputs for executing create on threads.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateThreadsVariables = CreateThreadsInput;



/**
 * The return value from executing create on threads.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateThreadsResult<Options extends CreateThreadsOptions> =
  SelectedThreadsOrDefault<Options> extends void ? void : GadgetRecord<SelectedThreadsOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createThreads<Options extends CreateThreadsOptions>(
  
    variables: CreateThreadsVariables,

  options?: LimitToKnownKeys<Options, CreateThreadsOptions>
): Promise<CreateThreadsResult<Options>>;

// Fully qualified, nested api identifier overload
async function createThreads<Options extends CreateThreadsOptions>(
  
      variables: FullyQualifiedCreateThreadsVariables,
  
  options?: LimitToKnownKeys<Options, CreateThreadsOptions>
): Promise<CreateThreadsResult<Options>>;

// Function implementation
async function createThreads<Options extends CreateThreadsOptions>(
  this: ThreadsManager,
  
      variables: CreateThreadsVariables | FullyQualifiedCreateThreadsVariables,
  
  options?: LimitToKnownKeys<Options, CreateThreadsOptions>
): Promise<CreateThreadsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedThreadsOrDefault<Options>>(
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
          type: "CreateThreadsInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedUpdateThreadsVariables = {
          threads?: UpdateThreadsInput,
      }

  /**
   * The inputs for executing update on threads.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateThreadsVariables = UpdateThreadsInput;



/**
 * The return value from executing update on threads.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateThreadsResult<Options extends UpdateThreadsOptions> =
  SelectedThreadsOrDefault<Options> extends void ? void : GadgetRecord<SelectedThreadsOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateThreads<Options extends UpdateThreadsOptions>(
  id: string,
    variables: UpdateThreadsVariables,

  options?: LimitToKnownKeys<Options, UpdateThreadsOptions>
): Promise<UpdateThreadsResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateThreads<Options extends UpdateThreadsOptions>(
  id: string,
      variables: FullyQualifiedUpdateThreadsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateThreadsOptions>
): Promise<UpdateThreadsResult<Options>>;

// Function implementation
async function updateThreads<Options extends UpdateThreadsOptions>(
  this: ThreadsManager,
  id: string,
      variables: UpdateThreadsVariables | FullyQualifiedUpdateThreadsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateThreadsOptions>
): Promise<UpdateThreadsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedThreadsOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "threads": {
          value: newVariables.threads,
          required: false,
          type: "UpdateThreadsInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on threads.
 * "Is void because this action deletes the record"
 **/
export type DeleteThreadsResult<Options extends DeleteThreadsOptions> =
  void extends void ? void : GadgetRecord<SelectedThreadsOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteThreads<Options extends DeleteThreadsOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteThreadsOptions>
): Promise<DeleteThreadsResult<Options>>;

// Function implementation
async function deleteThreads<Options extends DeleteThreadsOptions>(
  this: ThreadsManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteThreadsOptions>
): Promise<DeleteThreadsResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "threads" */
export class ThreadsManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one threads by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneThreadsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "threads";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: FindOneThreadsOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends FindOneThreadsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneThreadsOptions>) => {
    return await findOneRunner<SelectedThreadsOrDefault<Options>>(
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
    defaultSelection: DefaultThreadsSelection,
  } as any
)

  
    /**
 * Finds one threads by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneThreadsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "threads";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: MaybeFindOneThreadsOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends MaybeFindOneThreadsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneThreadsOptions>) => {
    const record = await findOneRunner<SelectedThreadsOrDefault<Options>>(
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
    defaultSelection: DefaultThreadsSelection,
  } as any
)

  
    /**
 * Finds many threads. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyThreadssOptions>(options?: LimitToKnownKeys<Options, FindManyThreadssOptions>):
    Promise<
      GadgetRecordList<
        SelectedThreadsOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "threadss";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: FindManyThreadssOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends FindManyThreadssOptions>(options?: LimitToKnownKeys<Options, FindManyThreadssOptions>):
    Promise<
      GadgetRecordList<
        SelectedThreadsOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedThreadsOrDefault<Options>>(
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
    defaultSelection: DefaultThreadsSelection,
  } as any
);

  
    /**
 * Finds the first matching threads. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstThreadsOptions>(options?: LimitToKnownKeys<Options, FindFirstThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "threadss";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: FindFirstThreadsOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends FindFirstThreadsOptions>(options?: LimitToKnownKeys<Options, FindFirstThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedThreadsOrDefault<Options>>(
      this,
      "threadss",
      DefaultThreadsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "threadss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultThreadsSelection,
  } as any
);

  
    /**
 * Finds the first matching threads. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstThreadsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "threadss";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: MaybeFindFirstThreadsOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends MaybeFindFirstThreadsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedThreadsOrDefault<Options>>(
      this,
      "threadss",
      DefaultThreadsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "threadss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultThreadsSelection,
  } as any
);

  
    /**
  * Finds one threads by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneThreadsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneThreadsOptions>):
    Promise<
      GadgetRecord<
        SelectedThreadsOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "threadss";
  modelApiIdentifier: "threads";
  defaultSelection: typeof DefaultThreadsSelection;
  selectionType: AvailableThreadsSelection;
  optionsType: FindOneThreadsOptions;
  schemaType: Query["threads"];
} = Object.assign(
  async <Options extends FindOneThreadsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneThreadsOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedThreadsOrDefault<Options>
      > & SelectedThreadsOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedThreadsOrDefault<Options>>(
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
    defaultSelection: DefaultThreadsSelection,
  } as any
)

  
    create = Object.assign(createThreads,
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
        type: "CreateThreadsInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "createThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: false;
    defaultSelection: typeof DefaultThreadsSelection;
    selectionType: AvailableThreadsSelection;
    optionsType: CreateThreadsOptions;
    schemaType:  Query["threads"];

    variablesType: (

      (
        FullyQualifiedCreateThreadsVariables          | CreateThreadsVariables      )
    ) | undefined;
    variables: {
                    "threads": {
          required: false;
          type: "CreateThreadsInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkCreate action with the given inputs.
  */
  bulkCreate: {
    <Options extends CreateThreadsOptions>(
        inputs: (FullyQualifiedCreateThreadsVariables | CreateThreadsVariables)[],
      options?: LimitToKnownKeys<Options, CreateThreadsOptions>
    ): Promise<CreateThreadsResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: true;
    defaultSelection: typeof DefaultThreadsSelection;
    selectionType: AvailableThreadsSelection;
    optionsType: CreateThreadsOptions;
    schemaType: Query["threads"];
    variablesType: (FullyQualifiedCreateThreadsVariables | CreateThreadsVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateThreadsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateThreadsOptions>(
        inputs: (FullyQualifiedCreateThreadsVariables | CreateThreadsVariables)[],
      options?: LimitToKnownKeys<Options, CreateThreadsOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["create"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateThreadsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateThreads,
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
        type: "GadgetID",
      },
      "threads": {
        required: false,
        type: "UpdateThreadsInput",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: true,
  } as unknown as {
    type: "action";
    operationName: "updateThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: false;
    defaultSelection: typeof DefaultThreadsSelection;
    selectionType: AvailableThreadsSelection;
    optionsType: UpdateThreadsOptions;
    schemaType:  Query["threads"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateThreadsVariables          | UpdateThreadsVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "threads": {
          required: false;
          type: "UpdateThreadsInput";
        };
          };
    hasAmbiguousIdentifier: false;
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: true;
    paramOnlyVariables: [];
    hasReturnType: false;
    acceptsModelInput: true;
  }
)

  
      /**
  * Executes the bulkUpdate action with the given inputs.
  */
  bulkUpdate: {
    <Options extends UpdateThreadsOptions>(
        inputs: (FullyQualifiedUpdateThreadsVariables | UpdateThreadsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateThreadsOptions>
    ): Promise<UpdateThreadsResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: true;
    defaultSelection: typeof DefaultThreadsSelection;
    selectionType: AvailableThreadsSelection;
    optionsType: UpdateThreadsOptions;
    schemaType: Query["threads"];
    variablesType: (FullyQualifiedUpdateThreadsVariables | UpdateThreadsVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateThreadsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateThreadsOptions>(
        inputs: (FullyQualifiedUpdateThreadsVariables | UpdateThreadsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateThreadsOptions>
    ) => {
        const fullyQualifiedInputs = inputs.map(input =>
          disambiguateActionParams(
            this["update"],
            undefined,
            input
          )
        );
      
      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateThreadsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteThreads,
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
        type: "GadgetID",
      },
    },
    hasAmbiguousIdentifier: false,
    /** @deprecated -- effects are dead, long live AAC */
    hasCreateOrUpdateEffect: false,
    paramOnlyVariables: [],
    hasReturnType: false,
    acceptsModelInput: false,
  } as unknown as {
    type: "action";
    operationName: "deleteThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteThreadsOptions;
    schemaType:  null ;

    variablesType: (
        { id: string } &

        {}
    ) | undefined;
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
  }
)

  
      /**
  * Executes the bulkDelete action with the given inputs. Deletes the records on the server.
  */
  bulkDelete: {
    <Options extends DeleteThreadsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteThreadsOptions>
    ): Promise<DeleteThreadsResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteThreads";
    namespace: null;
    modelApiIdentifier: "threads";
    modelSelectionField: "threads";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteThreadsOptions;
    schemaType: null;
    variablesType: IDsList | undefined;
    variables: {
        ids: {
          required: true;
          type: "[GadgetID!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends DeleteThreadsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteThreadsOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
