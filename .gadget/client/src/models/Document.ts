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
      Document,
      DocumentSort,
      DocumentFilter,
      AvailableDocumentSelection,
      CreateDocumentInput,
      UpdateDocumentInput,
  
} from "../types.js";

import { disambiguateActionParams } from "../support.js";

export const DefaultDocumentSelection = {
  "__typename": true,
  "createdAt": true,
  "file": {
    "mimeType": true,
    "url": true
  },
  "id": true,
  "updatedAt": true
} as const;

/**
* Produce a type that holds only the selected fields (and nested fields) of "document". The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedDocumentOrDefault<Options extends Selectable<AvailableDocumentSelection>> = DeepFilterNever<
  Select<
    Document,
    DefaultSelection<
      AvailableDocumentSelection,
      Options,
      typeof DefaultDocumentSelection
    >
  >>;

/** Options that can be passed to the `DocumentManager#findOne` method */
export interface FindOneDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
};

/** Options that can be passed to the `DocumentManager#maybeFindOne` method */
export interface MaybeFindOneDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
};

/** Options that can be passed to the `DocumentManager#findMany` method */
export interface FindManyDocumentsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
  /** Return records sorted by these sorts */
  sort?: DocumentSort | DocumentSort[] | null;
  /** Only return records matching these filters. */
  filter?: DocumentFilter | DocumentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};

/** Options that can be passed to the `DocumentManager#findFirst` method */
export interface FindFirstDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
  /** Return records sorted by these sorts */
  sort?: DocumentSort | DocumentSort[] | null;
  /** Only return records matching these filters. */
  filter?: DocumentFilter | DocumentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};

/** Options that can be passed to the `DocumentManager#maybeFindFirst` method */
export interface MaybeFindFirstDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
  /** Return records sorted by these sorts */
  sort?: DocumentSort | DocumentSort[] | null;
  /** Only return records matching these filters. */
  filter?: DocumentFilter | DocumentFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};


export interface CreateDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
};


export interface UpdateDocumentOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableDocumentSelection;
};


export interface DeleteDocumentOptions {
};


const apiIdentifier = "document";
const pluralApiIdentifier = "documents";


    
  /**
   * The fully-qualified, expanded form of the inputs for executing this action.
   * The flattened style should be preferred over this style, but for models with ambiguous API identifiers, this style can be used to remove any ambiguity.
   **/
  export type FullyQualifiedCreateDocumentVariables = {
          document?: CreateDocumentInput,
      }

  /**
   * The inputs for executing create on document.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type CreateDocumentVariables = CreateDocumentInput;



/**
 * The return value from executing create on document.
 * "Is a GadgetRecord of the model's type."
 **/
export type CreateDocumentResult<Options extends CreateDocumentOptions> =
  SelectedDocumentOrDefault<Options> extends void ? void : GadgetRecord<SelectedDocumentOrDefault<Options>>
;


/**
  * Executes the create action. Accepts the parameters for the action via the `variables` argument. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function createDocument<Options extends CreateDocumentOptions>(
  
    variables: CreateDocumentVariables,

  options?: LimitToKnownKeys<Options, CreateDocumentOptions>
): Promise<CreateDocumentResult<Options>>;

// Fully qualified, nested api identifier overload
async function createDocument<Options extends CreateDocumentOptions>(
  
      variables: FullyQualifiedCreateDocumentVariables,
  
  options?: LimitToKnownKeys<Options, CreateDocumentOptions>
): Promise<CreateDocumentResult<Options>>;

// Function implementation
async function createDocument<Options extends CreateDocumentOptions>(
  this: DocumentManager,
  
      variables: CreateDocumentVariables | FullyQualifiedCreateDocumentVariables,
  
  options?: LimitToKnownKeys<Options, CreateDocumentOptions>
): Promise<CreateDocumentResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["create"],
       undefined,
      variables
    );

  return (await actionRunner<SelectedDocumentOrDefault<Options>>(
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
          type: "CreateDocumentInput",
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
  export type FullyQualifiedUpdateDocumentVariables = {
          document?: UpdateDocumentInput,
      }

  /**
   * The inputs for executing update on document.
   * This is the flattened style of inputs, suitable for general use, and should be preferred.
   **/

    export type UpdateDocumentVariables = UpdateDocumentInput;



/**
 * The return value from executing update on document.
 * "Is a GadgetRecord of the model's type."
 **/
export type UpdateDocumentResult<Options extends UpdateDocumentOptions> =
  SelectedDocumentOrDefault<Options> extends void ? void : GadgetRecord<SelectedDocumentOrDefault<Options>>
;


/**
  * Executes the update action on one record specified by `id`. Runs the action and returns a Promise for the updated record.
  */

// Flat style overload
async function updateDocument<Options extends UpdateDocumentOptions>(
  id: string,
    variables: UpdateDocumentVariables,

  options?: LimitToKnownKeys<Options, UpdateDocumentOptions>
): Promise<UpdateDocumentResult<Options>>;

// Fully qualified, nested api identifier overload
async function updateDocument<Options extends UpdateDocumentOptions>(
  id: string,
      variables: FullyQualifiedUpdateDocumentVariables,
  
  options?: LimitToKnownKeys<Options, UpdateDocumentOptions>
): Promise<UpdateDocumentResult<Options>>;

// Function implementation
async function updateDocument<Options extends UpdateDocumentOptions>(
  this: DocumentManager,
  id: string,
      variables: UpdateDocumentVariables | FullyQualifiedUpdateDocumentVariables,
  
  options?: LimitToKnownKeys<Options, UpdateDocumentOptions>
): Promise<UpdateDocumentResult<Options>> {
    const newVariables = disambiguateActionParams(
      this["update"],
       id,
      variables
    );

  return (await actionRunner<SelectedDocumentOrDefault<Options>>(
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
          type: "GadgetID",
        },
                    "document": {
          value: newVariables.document,
          required: false,
          type: "UpdateDocumentInput",
        },
          },
    options,
    null,
    false
  ));
}

  
    

/**
 * The return value from executing delete on document.
 * "Is void because this action deletes the record"
 **/
export type DeleteDocumentResult<Options extends DeleteDocumentOptions> =
  void extends void ? void : GadgetRecord<SelectedDocumentOrDefault<Options>>
;


/**
  * Executes the delete action on one record specified by `id`. Deletes the record on the server. Returns a Promise that resolves if the delete succeeds.
  */

// Fully qualified, nested api identifier overload
async function deleteDocument<Options extends DeleteDocumentOptions>(
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteDocumentOptions>
): Promise<DeleteDocumentResult<Options>>;

// Function implementation
async function deleteDocument<Options extends DeleteDocumentOptions>(
  this: DocumentManager,
  id: string,
  
  options?: LimitToKnownKeys<Options, DeleteDocumentOptions>
): Promise<DeleteDocumentResult<Options>> {

  return (await actionRunner<void>(
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
          type: "GadgetID",
        },
                },
    options,
    null,
    false
  ));
}

  



/** All the actions available at the collection level and record level for "document" */
export class DocumentManager {
  constructor(readonly connection: GadgetConnection) {}

  
    /**
 * Finds one document by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
findOne: {
  <Options extends FindOneDocumentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      >
    >;
  type: "findOne",
  findByVariableName: "id";
  operationName: "document";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: FindOneDocumentOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends FindOneDocumentOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneDocumentOptions>) => {
    return await findOneRunner<SelectedDocumentOrDefault<Options>>(
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
    defaultSelection: DefaultDocumentSelection,
  } as any
)

  
    /**
 * Finds one document by ID. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
 **/
maybeFindOne: {
  <Options extends MaybeFindOneDocumentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      > | null
    >;
  type: "maybeFindOne";
  findByVariableName: "id";
  operationName: "document";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: MaybeFindOneDocumentOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends MaybeFindOneDocumentOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneDocumentOptions>) => {
    const record = await findOneRunner<SelectedDocumentOrDefault<Options>>(
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
    defaultSelection: DefaultDocumentSelection,
  } as any
)

  
    /**
 * Finds many document. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findMany: {
  <Options extends FindManyDocumentsOptions>(options?: LimitToKnownKeys<Options, FindManyDocumentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedDocumentOrDefault<Options>
      >
    >;
  type: "findMany";
  operationName: "documents";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: FindManyDocumentsOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends FindManyDocumentsOptions>(options?: LimitToKnownKeys<Options, FindManyDocumentsOptions>):
    Promise<
      GadgetRecordList<
        SelectedDocumentOrDefault<Options>
      >
    > =>
  {
    return await findManyRunner<SelectedDocumentOrDefault<Options>>(
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
    defaultSelection: DefaultDocumentSelection,
  } as any
);

  
    /**
 * Finds the first matching document. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
 **/
findFirst: {
  <Options extends FindFirstDocumentOptions>(options?: LimitToKnownKeys<Options, FindFirstDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      >
    >;
  type: "findFirst";
  operationName: "documents";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: FindFirstDocumentOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends FindFirstDocumentOptions>(options?: LimitToKnownKeys<Options, FindFirstDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      >
    > =>
  {
    const list = await findManyRunner<SelectedDocumentOrDefault<Options>>(
      this,
      "documents",
      DefaultDocumentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      true
    );
    return list[0];
  },
  {
    type: "findFirst",
    operationName: "documents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultDocumentSelection,
  } as any
);

  
    /**
 * Finds the first matching document. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
 **/
maybeFindFirst: {
  <Options extends MaybeFindFirstDocumentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      > | null
    >;
  type: "maybeFindFirst";
  operationName: "documents";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: MaybeFindFirstDocumentOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends MaybeFindFirstDocumentOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      > | null
    > =>
  {
    const list = await findManyRunner<SelectedDocumentOrDefault<Options>>(
      this,
      "documents",
      DefaultDocumentSelection,
      apiIdentifier,
      { ...options, first: 1, last: undefined, before: undefined, after: undefined },
      false
    );
    return list?.[0] ?? null;
  },
  {
    type: "maybeFindFirst",
    operationName: "documents",
    modelApiIdentifier: apiIdentifier,
    defaultSelection: DefaultDocumentSelection,
  } as any
);

  
    /**
  * Finds one document by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
  **/
findById: {
  <Options extends FindOneDocumentOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDocumentOptions>):
    Promise<
      GadgetRecord<
        SelectedDocumentOrDefault<Options>
      >
    >;
  type: "findOne";
  findByVariableName: "id";
  operationName: "documents";
  modelApiIdentifier: "document";
  defaultSelection: typeof DefaultDocumentSelection;
  selectionType: AvailableDocumentSelection;
  optionsType: FindOneDocumentOptions;
  schemaType: Query["document"];
} = Object.assign(
  async <Options extends FindOneDocumentOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneDocumentOptions>):
    Promise<
      GadgetRecordImplementation<
        SelectedDocumentOrDefault<Options>
      > & SelectedDocumentOrDefault<Options>
    > =>
  {
    return await findOneByFieldRunner<SelectedDocumentOrDefault<Options>>(
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
    defaultSelection: DefaultDocumentSelection,
  } as any
)

  
    create = Object.assign(createDocument,
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
        type: "CreateDocumentInput",
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
    operationName: "createDocument";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "document";
    isBulk: false;
    defaultSelection: typeof DefaultDocumentSelection;
    selectionType: AvailableDocumentSelection;
    optionsType: CreateDocumentOptions;
    schemaType:  Query["document"];

    variablesType: (

      (
        FullyQualifiedCreateDocumentVariables          | CreateDocumentVariables      )
    ) | undefined;
    variables: {
                    "document": {
          required: false;
          type: "CreateDocumentInput";
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
    <Options extends CreateDocumentOptions>(
        inputs: (FullyQualifiedCreateDocumentVariables | CreateDocumentVariables)[],
      options?: LimitToKnownKeys<Options, CreateDocumentOptions>
    ): Promise<CreateDocumentResult<Options>[]>;
    type: "action";
    operationName: "bulkCreateDocuments";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "documents";
    isBulk: true;
    defaultSelection: typeof DefaultDocumentSelection;
    selectionType: AvailableDocumentSelection;
    optionsType: CreateDocumentOptions;
    schemaType: Query["document"];
    variablesType: (FullyQualifiedCreateDocumentVariables | CreateDocumentVariables)[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkCreateDocumentsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends CreateDocumentOptions>(
        inputs: (FullyQualifiedCreateDocumentVariables | CreateDocumentVariables)[],
      options?: LimitToKnownKeys<Options, CreateDocumentOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkCreateDocumentsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    update = Object.assign(updateDocument,
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
        type: "GadgetID",
      },
      "document": {
        required: false,
        type: "UpdateDocumentInput",
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
    operationName: "updateDocument";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "document";
    isBulk: false;
    defaultSelection: typeof DefaultDocumentSelection;
    selectionType: AvailableDocumentSelection;
    optionsType: UpdateDocumentOptions;
    schemaType:  Query["document"];

    variablesType: (
        { id: string } &

      (
        FullyQualifiedUpdateDocumentVariables          | UpdateDocumentVariables      )
    ) | undefined;
    variables: {
              id: {
          required: true;
          type: "GadgetID";
        };
                    "document": {
          required: false;
          type: "UpdateDocumentInput";
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
    <Options extends UpdateDocumentOptions>(
        inputs: (FullyQualifiedUpdateDocumentVariables | UpdateDocumentVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateDocumentOptions>
    ): Promise<UpdateDocumentResult<Options>[]>;
    type: "action";
    operationName: "bulkUpdateDocuments";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "documents";
    isBulk: true;
    defaultSelection: typeof DefaultDocumentSelection;
    selectionType: AvailableDocumentSelection;
    optionsType: UpdateDocumentOptions;
    schemaType: Query["document"];
    variablesType: (FullyQualifiedUpdateDocumentVariables | UpdateDocumentVariables & { id: string })[];
    variables: {
        inputs: {
          required: true;
          type: "[BulkUpdateDocumentsInput!]";
        };
      };
    hasReturnType: boolean;
    acceptsModelInput: boolean;
  } = Object.assign(
    async <Options extends UpdateDocumentOptions>(
        inputs: (FullyQualifiedUpdateDocumentVariables | UpdateDocumentVariables & { id: string })[],
      options?: LimitToKnownKeys<Options, UpdateDocumentOptions>
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[BulkUpdateDocumentsInput!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: true,
    } as any
  );

  
    delete = Object.assign(deleteDocument,
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
    operationName: "deleteDocument";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "document";
    isBulk: false;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteDocumentOptions;
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
    <Options extends DeleteDocumentOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteDocumentOptions>
    ): Promise<DeleteDocumentResult<Options>[]>;
    type: "action";
    operationName: "bulkDeleteDocuments";
    namespace: null;
    modelApiIdentifier: "document";
    modelSelectionField: "documents";
    isBulk: true;
    defaultSelection: null;
    selectionType: Record<string, never>;
    optionsType: DeleteDocumentOptions;
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
    async <Options extends DeleteDocumentOptions>(
        ids: string[],
      options?: LimitToKnownKeys<Options, DeleteDocumentOptions>
    ) => {

      return (await actionRunner<any>(
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
          }
,
        options,
        null,
        false
      )) as any[];
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
          type: "[GadgetID!]",
        },
      },
      hasReturnType: false,
      acceptsModelInput: false,
    } as any
  );

  
}
