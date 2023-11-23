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
      Assistants,
      AssistantsSort,
      AssistantsFilter,
      AvailableAssistantsSelection,
      CreateAssistantsInput,
      UpdateAssistantsInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultAssistantsSelection = {
  "__typename": true,
  "createdAt": true,
  "id": true,
  "instructions": true,
  "name": true,
  "openAiId": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "assistants". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedAssistantsOrDefault<Options extends Selectable<AvailableAssistantsSelection>> = DeepFilterNever<
  Select<
    Assistants,
    DefaultSelection<
      AvailableAssistantsSelection,
      Options,
      typeof DefaultAssistantsSelection
    >
  >>;

/** Options that can be passed to the `AssistantsManager#findOne` method */
export interface FindOneAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
};

/** Options that can be passed to the `AssistantsManager#maybeFindOne` method */
export interface MaybeFindOneAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
};

/** Options that can be passed to the `AssistantsManager#findMany` method */
export interface FindManyAssistantssOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
  /** Return records sorted by these sorts */
  sort?: AssistantsSort | AssistantsSort[] | null;
  /** Only return records matching these filters. */
  filter?: AssistantsFilter | AssistantsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `AssistantsManager#findFirst` method */
export interface FindFirstAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
  /** Return records sorted by these sorts */
  sort?: AssistantsSort | AssistantsSort[] | null;
  /** Only return records matching these filters. */
  filter?: AssistantsFilter | AssistantsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `AssistantsManager#maybeFindFirst` method */
export interface MaybeFindFirstAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
  /** Return records sorted by these sorts */
  sort?: AssistantsSort | AssistantsSort[] | null;
  /** Only return records matching these filters. */
  filter?: AssistantsFilter | AssistantsFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
};


export interface UpdateAssistantsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableAssistantsSelection;
};


export interface DeleteAssistantsOptions {
};


const apiIdentifier = "assistants";
const pluralApiIdentifier = "assistantss";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateAssistantsVariables = {
          assistants?: CreateAssistantsInput,
      }

  /**
   * The inputs for executing create on assistants.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateAssistantsVariables = CreateAssistantsInput;



/**
 * The return value from executing create on assistants.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateAssistantsResult<Options extends CreateAssistantsOptions> =
  SelectedAssistantsOrDefault<Options> extends void ? void : GadgetRecord<SelectedAssistantsOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createAssistants<Options extends CreateAssistantsOptions>(
  
    variables: CreateAssistantsVariables,

  options?: LimitToKnownKeys<Options, CreateAssistantsOptions>
): Promise<CreateAssistantsResult<Options>>;

// Fully qualified, nested api identifier overload
async function createAssistants<Options extends CreateAssistantsOptions>(
  
      variables: FullyQualifiedCreateAssistantsVariables,
  
  options?: LimitToKnownKeys<Options, CreateAssistantsOptions>
): Promise<CreateAssistantsResult<Options>>;

// Function implementation
async function createAssistants<Options extends CreateAssistantsOptions>(
  this: AssistantsManager,
  
      variables: CreateAssistantsVariables | FullyQualifiedCreateAssistantsVariables,
  
  options?: LimitToKnownKeys<Options, CreateAssistantsOptions>
): Promise<CreateAssistantsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedAssistantsOrDefault<Options>>(
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
          type: "CreateAssistantsInput",
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
  export type FullyQualifiedUpdateAssistantsVariables = {
          assistants?: UpdateAssistantsInput,
      }

  /**
   * The inputs for executing update on assistants.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateAssistantsVariables = UpdateAssistantsInput;



/**
 * The return value from executing update on assistants.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateAssistantsResult<Options extends UpdateAssistantsOptions> =
  SelectedAssistantsOrDefault<Options> extends void ? void : GadgetRecord<SelectedAssistantsOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateAssistants<Options extends UpdateAssistantsOptions>(
  id: string,
    variables: UpdateAssistantsVariables,

  options?: LimitToKnownKeys<Options, UpdateAssistantsOptions>
): Promise<UpdateAssistantsResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateAssistants<Options extends UpdateAssistantsOptions>(
  id: string,
      variables: FullyQualifiedUpdateAssistantsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateAssistantsOptions>
): Promise<UpdateAssistantsResult<Options>>;

// Function implementation
async function updateAssistants<Options extends UpdateAssistantsOptions>(
  this: AssistantsManager,
  id: string,
      variables: UpdateAssistantsVariables | FullyQualifiedUpdateAssistantsVariables,
  
  options?: LimitToKnownKeys<Options, UpdateAssistantsOptions>
): Promise<UpdateAssistantsResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedAssistantsOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "assistants": {
          value: newVariables.assistants,
          required: false,
          type: "UpdateAssistantsInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on assistants.
 * "Is void because this action deletes the record"
 **/
export type DeleteAssistantsResult<Options extends DeleteAssistantsOptions> =
  void extends void ? void : GadgetRecord<SelectedAssistantsOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteAssistants<Options extends DeleteAssistantsOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAssistantsOptions>
): Promise<DeleteAssistantsResult<Options>>;

// Function implementation
async function deleteAssistants<Options extends DeleteAssistantsOptions>(
  this: AssistantsManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteAssistantsOptions>
): Promise<DeleteAssistantsResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "assistants" */
export class AssistantsManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one assistants by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneAssistantsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "assistants";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: FindOneAssistantsOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends FindOneAssistantsOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneAssistantsOptions>) => {
    return await findOneRunner<SelectedAssistantsOrDefault<Options>>(
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
    defaultSelection: DefaultAssistantsSelection,
  } as any
)

  
    /**
 * Finds one assistants by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneAssistantsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "assistants";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: MaybeFindOneAssistantsOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends MaybeFindOneAssistantsOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneAssistantsOptions>) => {
    const record = await findOneRunner<SelectedAssistantsOrDefault<Options>>(
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
    defaultSelection: DefaultAssistantsSelection,
  } as any
)

  
    /**
 * Finds many assistants. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyAssistantssOptions>(options?: LimitToKnownKeys<Options, FindManyAssistantssOptions>):
    Promise<
      GadgetRecordList<
        SelectedAssistantsOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "assistantss";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: FindManyAssistantssOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends FindManyAssistantssOptions>(options?: LimitToKnownKeys<Options, FindManyAssistantssOptions>):
    Promise<
      GadgetRecordList<
        SelectedAssistantsOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedAssistantsOrDefault<Options>>(
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
    defaultSelection: DefaultAssistantsSelection,
  } as any
);

  
    /**
 * Finds the first matching assistants. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstAssistantsOptions>(options?: LimitToKnownKeys<Options, FindFirstAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "assistantss";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: FindFirstAssistantsOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends FindFirstAssistantsOptions>(options?: LimitToKnownKeys<Options, FindFirstAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedAssistantsOrDefault<Options>>(
      this,
      "assistantss",
      DefaultAssistantsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "assistantss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultAssistantsSelection,
  } as any
);

  
    /**
 * Finds the first matching assistants. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstAssistantsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "assistantss";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: MaybeFindFirstAssistantsOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends MaybeFindFirstAssistantsOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedAssistantsOrDefault<Options>>(
      this,
      "assistantss",
      DefaultAssistantsSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "assistantss",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultAssistantsSelection,
  } as any
);

  
    /**
  * Finds one assistants by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneAssistantsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAssistantsOptions>):
    Promise<
      GadgetRecord<
        SelectedAssistantsOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "assistantss";
  modelApiIdentifier: "assistants";
  defaultSelection: typeof DefaultAssistantsSelection;
  selectionType: AvailableAssistantsSelection;
  optionsType: FindOneAssistantsOptions;
  schemaType: Query["assistants"];
} = Object.assign(
  async <Options extends FindOneAssistantsOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneAssistantsOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedAssistantsOrDefault<Options>
      > & SelectedAssistantsOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedAssistantsOrDefault<Options>>(
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
    defaultSelection: DefaultAssistantsSelection,
  } as any
)

  
    create = Object.assign(createAssistants,
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
        type: "CreateAssistantsInput",
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
    operationName: "createAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: false;
    defaultSelection: typeof DefaultAssistantsSelection;
    selectionType: AvailableAssistantsSelection;
    optionsType: CreateAssistantsOptions;
    schemaType:  Query["assistants"];

    variablesType: (

      (
        FullyQualifiedCreateAssistantsVariables          | CreateAssistantsVariables      )
    ) | undefined;
    variables: {
                    "assistants": {
          required: false;
          type: "CreateAssistantsInput";
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
    <Options extends CreateAssistantsOptions>(
        inputs: (FullyQualifiedCreateAssistantsVariables | CreateAssistantsVariables)[],
      options?: LimitToKnownKeys<Options, CreateAssistantsOptions>
    ): Promise<CreateAssistantsResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: true;
    defaultSelection: typeof DefaultAssistantsSelection;
    selectionType: AvailableAssistantsSelection;
    optionsType: CreateAssistantsOptions;
    schemaType: Query["assistants"];
    variablesType: (FullyQualifiedCreateAssistantsVariables | CreateAssistantsVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateAssistantsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateAssistantsOptions>(
        inputs: (FullyQualifiedCreateAssistantsVariables | CreateAssistantsVariables)[],
      options?: LimitToKnownKeys<Options, CreateAssistantsOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateAssistantsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateAssistants,
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
        type: "GadgetID",
      },
      "assistants": {
        required: false,
        type: "UpdateAssistantsInput",
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
    operationName: "updateAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: false;
    defaultSelection: typeof DefaultAssistantsSelection;
    selectionType: AvailableAssistantsSelection;
    optionsType: UpdateAssistantsOptions;
    schemaType:  Query["assistants"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateAssistantsVariables          | UpdateAssistantsVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "assistants": {
          required: false;
          type: "UpdateAssistantsInput";
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
    <Options extends UpdateAssistantsOptions>(
        inputs: (FullyQualifiedUpdateAssistantsVariables | UpdateAssistantsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateAssistantsOptions>
    ): Promise<UpdateAssistantsResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: true;
    defaultSelection: typeof DefaultAssistantsSelection;
    selectionType: AvailableAssistantsSelection;
    optionsType: UpdateAssistantsOptions;
    schemaType: Query["assistants"];
    variablesType: (FullyQualifiedUpdateAssistantsVariables | UpdateAssistantsVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateAssistantsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateAssistantsOptions>(
        inputs: (FullyQualifiedUpdateAssistantsVariables | UpdateAssistantsVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateAssistantsOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateAssistantsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteAssistants,
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
    operationName: "deleteAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteAssistantsOptions;
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
    <Options extends DeleteAssistantsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteAssistantsOptions>
    ): Promise<DeleteAssistantsResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteAssistants";
    namespace: null;
    modelApiIdentifier: "assistants";
    modelSelectionField: "assistants";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteAssistantsOptions;
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
    async <Options extends DeleteAssistantsOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteAssistantsOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
