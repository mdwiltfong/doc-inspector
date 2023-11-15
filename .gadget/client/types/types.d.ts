import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {
}
export declare enum GadgetFieldType {
    ID = 0,
    Number = 1,
    String = 2,
    Enum = 3,
    RichText = 4,
    DateTime = 5,
    Email = 6,
    URL = 7,
    Money = 8,
    File = 9,
    Color = 10,
    Password = 11,
    Computed = 12,
    HasManyThrough = 13,
    BelongsTo = 14,
    HasMany = 15,
    HasOne = 16,
    Boolean = 17,
    Object = 18,
    Array = 19,
    JSON = 20,
    Code = 21,
    EncryptedString = 22,
    Vector = 23,
    Any = 24,
    Null = 25,
    RecordState = 26,
    RoleAssignments = 27
}
/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending" | "Descending";
/** Represents one user result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalUserRecord = Scalars["JSONObject"];
/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];
/** Represents one document result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalDocumentRecord = Scalars["JSONObject"];
/** Represents one threads result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalThreadsRecord = Scalars["JSONObject"];
/** Represents one messages result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalMessagesRecord = Scalars["JSONObject"];
/** Represents one assistants result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalAssistantsRecord = Scalars["JSONObject"];
/** The `Upload` scalar type represents a file upload. */
export type Upload = any;
export type UserSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the resetPasswordTokenExpiration field. Defaults to ascending (smallest value first). */
    resetPasswordTokenExpiration?: SortOrder | null;
    /** Sort the results by the emailVerificationTokenExpiration field. Defaults to ascending (smallest value first). */
    emailVerificationTokenExpiration?: SortOrder | null;
    /** Sort the results by the googleProfileId field. Defaults to ascending (smallest value first). */
    googleProfileId?: SortOrder | null;
    /** Sort the results by the email field. Defaults to ascending (smallest value first). */
    email?: SortOrder | null;
    /** Sort the results by the resetPasswordToken field. Defaults to ascending (smallest value first). */
    resetPasswordToken?: SortOrder | null;
    /** Sort the results by the lastName field. Defaults to ascending (smallest value first). */
    lastName?: SortOrder | null;
    /** Sort the results by the googleImageUrl field. Defaults to ascending (smallest value first). */
    googleImageUrl?: SortOrder | null;
    /** Sort the results by the emailVerificationToken field. Defaults to ascending (smallest value first). */
    emailVerificationToken?: SortOrder | null;
    /** Sort the results by the emailVerified field. Defaults to ascending (smallest value first). */
    emailVerified?: SortOrder | null;
    /** Sort the results by the firstName field. Defaults to ascending (smallest value first). */
    firstName?: SortOrder | null;
    /** Sort the results by the lastSignedIn field. Defaults to ascending (smallest value first). */
    lastSignedIn?: SortOrder | null;
};
export type UserFilter = {
    AND?: (UserFilter | null)[];
    OR?: (UserFilter | null)[];
    NOT?: (UserFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    resetPasswordTokenExpiration?: DateTimeFilter | null;
    emailVerificationTokenExpiration?: DateTimeFilter | null;
    googleProfileId?: StringFilter | null;
    email?: StringFilter | null;
    resetPasswordToken?: StringFilter | null;
    lastName?: StringFilter | null;
    googleImageUrl?: StringFilter | null;
    emailVerificationToken?: StringFilter | null;
    emailVerified?: BooleanFilter | null;
    firstName?: StringFilter | null;
    lastSignedIn?: DateTimeFilter | null;
};
export type IDFilter = {
    equals?: (Scalars['GadgetID'] | null) | null;
    notEquals?: (Scalars['GadgetID'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['GadgetID'] | null) | null)[];
    notIn?: ((Scalars['GadgetID'] | null) | null)[];
    lessThan?: (Scalars['GadgetID'] | null) | null;
    lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;
    greaterThan?: (Scalars['GadgetID'] | null) | null;
    greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};
export type DateTimeFilter = {
    equals?: Date | Scalars['ISO8601DateString'] | null;
    notEquals?: Date | Scalars['ISO8601DateString'] | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: (Date | Scalars['ISO8601DateString'] | null)[];
    notIn?: (Date | Scalars['ISO8601DateString'] | null)[];
    lessThan?: Date | Scalars['ISO8601DateString'] | null;
    lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    greaterThan?: Date | Scalars['ISO8601DateString'] | null;
    greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;
    before?: Date | Scalars['ISO8601DateString'] | null;
    after?: Date | Scalars['ISO8601DateString'] | null;
};
export type StringFilter = {
    equals?: (Scalars['String'] | null) | null;
    notEquals?: (Scalars['String'] | null) | null;
    isSet?: (Scalars['Boolean'] | null) | null;
    in?: ((Scalars['String'] | null) | null)[];
    notIn?: ((Scalars['String'] | null) | null)[];
    lessThan?: (Scalars['String'] | null) | null;
    lessThanOrEqual?: (Scalars['String'] | null) | null;
    greaterThan?: (Scalars['String'] | null) | null;
    greaterThanOrEqual?: (Scalars['String'] | null) | null;
    startsWith?: (Scalars['String'] | null) | null;
};
export type BooleanFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['Boolean'] | null) | null;
    notEquals?: (Scalars['Boolean'] | null) | null;
};
export type DocumentSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
};
export type DocumentFilter = {
    AND?: (DocumentFilter | null)[];
    OR?: (DocumentFilter | null)[];
    NOT?: (DocumentFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
};
export type ThreadsSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the metadata field. Defaults to ascending (smallest value first). */
    metadata?: SortOrder | null;
};
export type ThreadsFilter = {
    AND?: (ThreadsFilter | null)[];
    OR?: (ThreadsFilter | null)[];
    NOT?: (ThreadsFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    metadata?: JSONFilter | null;
};
export type JSONFilter = {
    isSet?: (Scalars['Boolean'] | null) | null;
    equals?: (Scalars['JSON'] | null) | null;
    in?: ((Scalars['JSON'] | null) | null)[];
    notIn?: ((Scalars['JSON'] | null) | null)[];
    notEquals?: (Scalars['JSON'] | null) | null;
    matches?: (Scalars['JSON'] | null) | null;
};
export type MessagesSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the thread_id field. Defaults to ascending (smallest value first). */
    thread_id?: SortOrder | null;
    /** Sort the results by the role field. Defaults to ascending (smallest value first). */
    role?: SortOrder | null;
    /** Sort the results by the content field. Defaults to ascending (smallest value first). */
    content?: SortOrder | null;
    /** Sort the results by the file_ids field. Defaults to ascending (smallest value first). */
    file_ids?: SortOrder | null;
    /** Sort the results by the assistant_id field. Defaults to ascending (smallest value first). */
    assistant_id?: SortOrder | null;
    /** Sort the results by the run_id field. Defaults to ascending (smallest value first). */
    run_id?: SortOrder | null;
};
export type MessagesFilter = {
    AND?: (MessagesFilter | null)[];
    OR?: (MessagesFilter | null)[];
    NOT?: (MessagesFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    thread_id?: StringFilter | null;
    role?: StringFilter | null;
    content?: StringFilter | null;
    file_ids?: StringFilter | null;
    assistant_id?: StringFilter | null;
    run_id?: StringFilter | null;
};
export type AssistantsSort = {
    /** Sort the results by the id field. Defaults to ascending (smallest value first). */
    id?: SortOrder | null;
    /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
    createdAt?: SortOrder | null;
    /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
    updatedAt?: SortOrder | null;
    /** Sort the results by the name field. Defaults to ascending (smallest value first). */
    name?: SortOrder | null;
    /** Sort the results by the description field. Defaults to ascending (smallest value first). */
    description?: SortOrder | null;
    /** Sort the results by the model field. Defaults to ascending (smallest value first). */
    model?: SortOrder | null;
    /** Sort the results by the instructions field. Defaults to ascending (smallest value first). */
    instructions?: SortOrder | null;
    /** Sort the results by the tools field. Defaults to ascending (smallest value first). */
    tools?: SortOrder | null;
    /** Sort the results by the file_ids field. Defaults to ascending (smallest value first). */
    file_ids?: SortOrder | null;
    /** Sort the results by the external_id field. Defaults to ascending (smallest value first). */
    external_id?: SortOrder | null;
};
export type AssistantsFilter = {
    AND?: (AssistantsFilter | null)[];
    OR?: (AssistantsFilter | null)[];
    NOT?: (AssistantsFilter | null)[];
    id?: IDFilter | null;
    createdAt?: DateTimeFilter | null;
    updatedAt?: DateTimeFilter | null;
    name?: StringFilter | null;
    description?: StringFilter | null;
    model?: StringFilter | null;
    instructions?: StringFilter | null;
    tools?: StringFilter | null;
    file_ids?: StringFilter | null;
    external_id?: StringFilter | null;
};
export type BulkSignUpUsersInput = {
    email?: (Scalars['String'] | null) | null;
    password?: (Scalars['String'] | null) | null;
};
export type BulkSignInUsersInput = {
    email?: (Scalars['String'] | null) | null;
    password?: (Scalars['String'] | null) | null;
};
export type UpdateUserInput = {
    resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;
    emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;
    googleProfileId?: (Scalars['String'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    resetPasswordToken?: (Scalars['String'] | null) | null;
    password?: (Scalars['String'] | null) | null;
    lastName?: (Scalars['String'] | null) | null;
    googleImageUrl?: (Scalars['String'] | null) | null;
    emailVerificationToken?: (Scalars['String'] | null) | null;
    emailVerified?: (Scalars['Boolean'] | null) | null;
    firstName?: (Scalars['String'] | null) | null;
    lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
    /** The field documents is misconfigured and can't be given as input. Please correct any problems with the field in order to access it. */
    documents?: (Scalars['GadgetMisconfiguredField'] | null) | null;
};
export type BulkUpdateUsersInput = {
    user?: UpdateUserInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type BulkSendVerifyEmailUsersInput = {
    email?: (Scalars['String'] | null) | null;
};
export type BulkVerifyEmailUsersInput = {
    code?: (Scalars['String'] | null) | null;
};
export type BulkSendResetPasswordUsersInput = {
    email?: (Scalars['String'] | null) | null;
};
export type BulkResetPasswordUsersInput = {
    password?: (Scalars['String'] | null) | null;
    code?: (Scalars['String'] | null) | null;
};
export type BulkChangePasswordUsersInput = {
    id: (Scalars['GadgetID'] | null);
    currentPassword?: (Scalars['String'] | null) | null;
    newPassword?: (Scalars['String'] | null) | null;
};
export type CreateDocumentInput = {
    file?: StoredFileInput | null;
};
export type StoredFileInput = {
    /** Sets the file contents using this string, interpreting the string as base64 encoded bytes. This is useful for creating files quickly and easily if you have the file contents available already, but, it doesn't support files larger than 10MB, and is slower to process for the backend. Using multipart file uploads or direct-to-storage file uploads is preferable. */
    base64?: (Scalars['String'] | null) | null;
    /** Sets the file contents using binary bytes sent along side a GraphQL mutation as a multipart POST request. Gadget expects this multipart POST request to be formatted according to the GraphQL multipart request spec defined at https://github.com/jaydenseric/graphql-multipart-request-spec. Sending files as a multipart POST requests is supported natively by the generated Gadget JS client using File objects as variables in API calls. This method supports files up to 100MB. */
    file?: (Scalars['Upload'] | null) | null;
    /** Sets the file contents by fetching a remote URL and saving a copy to cloud storage. File downloads happen as the request is processed so they can be validated, which means large files can take some time to download from the existing URL. If the file can't be fetched from this URL, the action will fail. */
    copyURL?: (Scalars['URL'] | null) | null;
    /** Sets the file contents using a token from a separate upload request made with the Gadget storage service. Uploading files while a user is completing the rest of a form gives a great user experience and supports much larger files, but requires client side code to complete the upload, and then pass the returned token for this field. */
    directUploadToken?: (Scalars['String'] | null) | null;
    /** Sets this file's mime type, which will then be used when serving the file during read requests as the `Content-Type` HTTP header. If not set, Gadget will infer a content type based on the file's contents. */
    mimeType?: (Scalars['String'] | null) | null;
    /** Sets this file's stored name, which will then be used as the file name when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName?: (Scalars['String'] | null) | null;
};
export type BulkCreateDocumentsInput = {
    document?: CreateDocumentInput | null;
};
export type UpdateDocumentInput = {
    file?: StoredFileInput | null;
};
export type BulkUpdateDocumentsInput = {
    document?: UpdateDocumentInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CreateThreadsInput = {
    metadata?: (Scalars['JSON'] | null) | null;
};
export type BulkCreateThreadsInput = {
    threads?: CreateThreadsInput | null;
};
export type UpdateThreadsInput = {
    metadata?: (Scalars['JSON'] | null) | null;
};
export type BulkUpdateThreadsInput = {
    threads?: UpdateThreadsInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CreateMessagesInput = {
    thread_id?: (Scalars['String'] | null) | null;
    role?: (Scalars['String'] | null) | null;
    content?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    assistant_id?: (Scalars['String'] | null) | null;
    run_id?: (Scalars['String'] | null) | null;
};
export type BulkCreateMessagesInput = {
    messages?: CreateMessagesInput | null;
};
export type UpdateMessagesInput = {
    thread_id?: (Scalars['String'] | null) | null;
    role?: (Scalars['String'] | null) | null;
    content?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    assistant_id?: (Scalars['String'] | null) | null;
    run_id?: (Scalars['String'] | null) | null;
};
export type BulkUpdateMessagesInput = {
    messages?: UpdateMessagesInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type CreateAssistantsInput = {
    name?: (Scalars['String'] | null) | null;
    description?: (Scalars['String'] | null) | null;
    model?: (Scalars['String'] | null) | null;
    instructions?: (Scalars['String'] | null) | null;
    tools?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    external_id?: (Scalars['String'] | null) | null;
};
export type BulkCreateAssistantsInput = {
    assistants?: CreateAssistantsInput | null;
};
export type UpdateAssistantsInput = {
    name?: (Scalars['String'] | null) | null;
    description?: (Scalars['String'] | null) | null;
    model?: (Scalars['String'] | null) | null;
    instructions?: (Scalars['String'] | null) | null;
    tools?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    external_id?: (Scalars['String'] | null) | null;
};
export type BulkUpdateAssistantsInput = {
    assistants?: UpdateAssistantsInput | null;
    id: (Scalars['GadgetID'] | null);
};
export type InternalUserInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    resetPasswordTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;
    emailVerificationTokenExpiration?: Date | Scalars['ISO8601DateString'] | null;
    googleProfileId?: (Scalars['String'] | null) | null;
    email?: (Scalars['String'] | null) | null;
    resetPasswordToken?: (Scalars['String'] | null) | null;
    password?: (Scalars['String'] | null) | null;
    lastName?: (Scalars['String'] | null) | null;
    googleImageUrl?: (Scalars['String'] | null) | null;
    emailVerificationToken?: (Scalars['String'] | null) | null;
    emailVerified?: (Scalars['Boolean'] | null) | null;
    firstName?: (Scalars['String'] | null) | null;
    /** A string list of Gadget platform Role keys to assign to this record */
    roles?: ((Scalars['String'] | null))[];
    lastSignedIn?: Date | Scalars['ISO8601DateString'] | null;
    /** The field documents is misconfigured and can't be given as input. Please correct any problems with the field in order to access it. */
    documents?: (Scalars['GadgetMisconfiguredField'] | null) | null;
};
export type AppGraphQLTriggerMutationContext = {
    /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
    sessionID?: (Scalars['GadgetID'] | null) | null;
};
export type InternalSessionInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    user?: InternalBelongsToInput | null;
};
export type InternalBelongsToInput = {
    /** Existing ID of another record, which you would like to associate this record with */
    _link?: (Scalars['GadgetID'] | null) | null;
};
export type InternalDocumentInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    file?: InternalStoredFileInput | null;
};
export type InternalStoredFileInput = {
    /** An opaque identifier used by Gadget internally to uniquely identify this stored file */
    storageToken: (Scalars['String'] | null);
    /** Byte size to report in API calls */
    byteSize: (Scalars['Int'] | null);
    /** File mime type to use when serving the file or making resize operations available */
    mimeType: (Scalars['String'] | null);
    /** Sets this file's stored name, which will then be used when serving the file during read requests. If not set, Gadget will infer a filename if possible. */
    fileName: (Scalars['String'] | null);
    /** Has no effect. Convenience property to allow sending an internal metadata blob back to the Internal API, but doesn't do anything. URLs generated by Gadget expire and are not stored. */
    url?: (Scalars['String'] | null) | null;
};
export type InternalThreadsInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    metadata?: (Scalars['JSON'] | null) | null;
};
export type InternalMessagesInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    thread_id?: (Scalars['String'] | null) | null;
    role?: (Scalars['String'] | null) | null;
    content?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    assistant_id?: (Scalars['String'] | null) | null;
    run_id?: (Scalars['String'] | null) | null;
};
export type InternalAssistantsInput = {
    state?: (Scalars['RecordState'] | null) | null;
    stateHistory?: (Scalars['RecordState'] | null) | null;
    id?: (Scalars['GadgetID'] | null) | null;
    createdAt?: Date | Scalars['ISO8601DateString'] | null;
    updatedAt?: Date | Scalars['ISO8601DateString'] | null;
    name?: (Scalars['String'] | null) | null;
    description?: (Scalars['String'] | null) | null;
    model?: (Scalars['String'] | null) | null;
    instructions?: (Scalars['String'] | null) | null;
    tools?: (Scalars['String'] | null) | null;
    file_ids?: (Scalars['String'] | null) | null;
    external_id?: (Scalars['String'] | null) | null;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
    CurrencyAmount: string;
    /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
    ISO8601DateString: string;
    /** A file object produced by a browser for uploading to cloud storage */
    Upload: File;
    /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
    String: string;
    /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSONObject: JSONObject;
    /** The `Boolean` scalar type represents `true` or `false`. */
    Boolean: boolean;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: JSONValue;
    /** The ID of a record in Gadget */
    GadgetID: string;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: Date;
    /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
    EmailAddress: string;
    /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
    URL: string;
    /** The field holding this value is currently misconfigured and can't be selected or updated. Check the problems on the field to fix this error. */
    GadgetMisconfiguredField: never;
    /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
    Int: number;
    /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
    HydrationPlan: unknown;
    /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
    RecordState: (string | {
        [key: string]: Scalars['RecordState'];
    });
}
/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
    __typename: 'SimpleError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
}
export type AvailableSimpleErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
};
export type ExecutionError = {
    __typename: 'SimpleError' | 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this error. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error. Only available for super users. */
    stack: (Scalars['String'] | null);
};
export type AvailableExecutionErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this error. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error. Only available for super users. */
    stack?: boolean | null | undefined;
};
/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
    __typename: 'InvalidRecordError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The Gadget platform error code for this InvalidRecordError. */
    code: Scalars['String'];
    /** The stack for any exception that caused the error */
    stack: (Scalars['String'] | null);
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField: (Scalars['JSONObject'] | null);
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors: InvalidFieldError[];
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record: (Scalars['JSONObject'] | null);
    /** The model of the record which failed validation */
    model: (GadgetModel | null);
}
export type AvailableInvalidRecordErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The Gadget platform error code for this InvalidRecordError. */
    code?: boolean | null | undefined;
    /** The stack for any exception that caused the error */
    stack?: boolean | null | undefined;
    /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
    validationErrorsByField?: boolean | null | undefined;
    /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
    validationErrors?: AvailableInvalidFieldErrorSelection;
    /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
    record?: boolean | null | undefined;
    /** The model of the record which failed validation */
    model?: AvailableGadgetModelSelection;
};
/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {
    __typename: 'InvalidFieldError';
    /** The human facing error message for this error. */
    message: Scalars['String'];
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier: Scalars['String'];
};
export type AvailableInvalidFieldErrorSelection = {
    __typename?: boolean | null | undefined;
    /** The human facing error message for this error. */
    message?: boolean | null | undefined;
    /** The apiIdentifier of the field this error occurred on. */
    apiIdentifier?: boolean | null | undefined;
};
export type GadgetModel = {
    __typename: 'GadgetModel';
    key: Scalars['String'];
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    filterable: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    searchable: Scalars['Boolean'];
    fields: GadgetModelField[];
    actions: GadgetAction[];
    action: (GadgetAction | null);
    pluralName: Scalars['String'];
    pluralApiIdentifier: Scalars['String'];
    currentSingletonApiIdentifier: (Scalars['String'] | null);
    initialCreatedState: (Scalars['String'] | null);
};
export type AvailableGadgetModelSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    searchable?: boolean | null | undefined;
    fields?: AvailableGadgetModelFieldSelection;
    actions?: AvailableGadgetActionSelection;
    action?: AvailableGadgetActionSelection;
    pluralName?: boolean | null | undefined;
    pluralApiIdentifier?: boolean | null | undefined;
    currentSingletonApiIdentifier?: boolean | null | undefined;
    initialCreatedState?: boolean | null | undefined;
};
/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
    __typename: 'GadgetModelField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
    isUniqueField: Scalars['Boolean'];
    sortable: Scalars['Boolean'];
    filterable: Scalars['Boolean'];
    examples: GadgetModelFieldExamples;
}
export type AvailableGadgetModelFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
    isUniqueField?: boolean | null | undefined;
    sortable?: boolean | null | undefined;
    filterable?: boolean | null | undefined;
    examples?: AvailableGadgetModelFieldExamplesSelection;
};
export type GadgetField = {
    __typename: 'GadgetModelField' | 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
};
export type AvailableGadgetFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {
    __typename: 'GadgetGenericFieldConfig' | 'GadgetObjectFieldConfig' | 'GadgetBelongsToConfig' | 'GadgetHasManyConfig' | 'GadgetEnumConfig' | 'GadgetDateTimeConfig';
    fieldType: GadgetFieldType;
};
export type AvailableGadgetFieldConfigInterfaceSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
};
export type GadgetModelFieldExamples = {
    __typename: 'GadgetModelFieldExamples';
    linkExistingChild: (GadgetFieldUsageExample | null);
    linkNewChild: (GadgetFieldUsageExample | null);
    linkToExistingParent: (GadgetFieldUsageExample | null);
    createNestedInParent: (GadgetFieldUsageExample | null);
};
export type AvailableGadgetModelFieldExamplesSelection = {
    __typename?: boolean | null | undefined;
    linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;
    linkNewChild?: AvailableGadgetFieldUsageExampleSelection;
    linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;
    createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};
export type GadgetFieldUsageExample = {
    __typename: 'GadgetFieldUsageExample';
    exampleGraphQLMutation: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetFieldUsageExampleSelection = {
    __typename?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
export type GadgetAction = {
    __typename: 'GadgetAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect: Scalars['Boolean'];
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect: Scalars['Boolean'];
    isDeleteAction: Scalars['Boolean'];
    isCreateOrUpdateAction: Scalars['Boolean'];
    operatesWithRecordIdentity: Scalars['Boolean'];
    possibleTransitions: Scalars['JSONObject'];
    availableInBulk: Scalars['Boolean'];
    bulkApiIdentifier: (Scalars['String'] | null);
    hasAmbiguousIdentifier: Scalars['Boolean'];
    inputFields: GadgetObjectField[];
    bulkInvokedByIDOnly: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetActionGraphQLType | null);
};
export type AvailableGadgetActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
    hasDeleteRecordEffect?: boolean | null | undefined;
    /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
    hasCreateOrUpdateEffect?: boolean | null | undefined;
    isDeleteAction?: boolean | null | undefined;
    isCreateOrUpdateAction?: boolean | null | undefined;
    operatesWithRecordIdentity?: boolean | null | undefined;
    possibleTransitions?: boolean | null | undefined;
    availableInBulk?: boolean | null | undefined;
    bulkApiIdentifier?: boolean | null | undefined;
    hasAmbiguousIdentifier?: boolean | null | undefined;
    inputFields?: AvailableGadgetObjectFieldSelection;
    bulkInvokedByIDOnly?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetActionGraphQLTypeSelection;
};
/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
    __typename: 'GadgetObjectField';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    fieldType: GadgetFieldType;
    hasDefault: Scalars['Boolean'];
    required: Scalars['Boolean'];
    requiredArgumentForInput: Scalars['Boolean'];
    configuration: GadgetFieldConfigInterface;
}
export type AvailableGadgetObjectFieldSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    hasDefault?: boolean | null | undefined;
    required?: boolean | null | undefined;
    requiredArgumentForInput?: boolean | null | undefined;
    configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};
export type GadgetTrigger = {
    __typename: 'GadgetTrigger';
    specID: Scalars['String'];
};
export type AvailableGadgetTriggerSelection = {
    __typename?: boolean | null | undefined;
    specID?: boolean | null | undefined;
};
export type GadgetActionGraphQLType = {
    __typename: 'GadgetActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation: (Scalars['String'] | null);
    exampleBulkGraphQLMutation: (Scalars['String'] | null);
    exampleBulkGraphQLVariables: (Scalars['JSON'] | null);
    exampleBulkImperativeInvocation: (Scalars['String'] | null);
    exampleBulkReactHook: (Scalars['String'] | null);
    bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};
export type AvailableGadgetActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
    /** @deprecated moved to exampleBulkGraphQLMutation */
    exampleBulkMutation?: boolean | null | undefined;
    exampleBulkGraphQLMutation?: boolean | null | undefined;
    exampleBulkGraphQLVariables?: boolean | null | undefined;
    exampleBulkImperativeInvocation?: boolean | null | undefined;
    exampleBulkReactHook?: boolean | null | undefined;
    bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};
export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetGenericFieldConfig';
    fieldType: GadgetFieldType;
}
export type AvailableGadgetGenericFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
};
export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetObjectFieldConfig';
    fieldType: GadgetFieldType;
    name: (Scalars['String'] | null);
    fields: GadgetModelField[];
}
export type AvailableGadgetObjectFieldConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    name?: boolean | null | undefined;
    fields?: AvailableGadgetModelFieldSelection;
};
export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetBelongsToConfig';
    fieldType: GadgetFieldType;
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetBelongsToConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetHasManyConfig';
    fieldType: GadgetFieldType;
    relatedModelKey: (Scalars['String'] | null);
    relatedModel: (GadgetModel | null);
    isConfigured: Scalars['Boolean'];
    isInverseConfigured: Scalars['Boolean'];
}
export type AvailableGadgetHasManyConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    relatedModelKey?: boolean | null | undefined;
    relatedModel?: AvailableGadgetModelSelection;
    isConfigured?: boolean | null | undefined;
    isInverseConfigured?: boolean | null | undefined;
};
export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetEnumConfig';
    fieldType: GadgetFieldType;
    allowMultiple: Scalars['Boolean'];
    allowOther: Scalars['Boolean'];
    options: GadgetEnumOption[];
}
export type AvailableGadgetEnumConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    allowMultiple?: boolean | null | undefined;
    allowOther?: boolean | null | undefined;
    options?: AvailableGadgetEnumOptionSelection;
};
export type GadgetEnumOption = {
    __typename: 'GadgetEnumOption';
    name: Scalars['String'];
    color: Scalars['String'];
};
export type AvailableGadgetEnumOptionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    color?: boolean | null | undefined;
};
export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
    __typename: 'GadgetDateTimeConfig';
    fieldType: GadgetFieldType;
    includeTime: Scalars['Boolean'];
}
export type AvailableGadgetDateTimeConfigSelection = {
    __typename?: boolean | null | undefined;
    fieldType?: boolean | null | undefined;
    includeTime?: boolean | null | undefined;
};
export type Query = {
    __typename: 'Query';
    user: (User | null);
    users: UserConnection;
    session: (Session | null);
    sessions: SessionConnection;
    document: (Document | null);
    documents: DocumentConnection;
    threads: (Threads | null);
    threadss: ThreadsConnection;
    messages: (Messages | null);
    messagess: MessagesConnection;
    assistants: (Assistants | null);
    assistantss: AssistantsConnection;
    internal: (InternalQueries | null);
    currentSession: (Session | null);
};
export type AvailableQuerySelection = {
    __typename?: boolean | null | undefined;
    user?: AvailableUserSelection;
    users?: AvailableUserConnectionSelection;
    session?: AvailableSessionSelection;
    sessions?: AvailableSessionConnectionSelection;
    document?: AvailableDocumentSelection;
    documents?: AvailableDocumentConnectionSelection;
    threads?: AvailableThreadsSelection;
    threadss?: AvailableThreadsConnectionSelection;
    messages?: AvailableMessagesSelection;
    messagess?: AvailableMessagesConnectionSelection;
    assistants?: AvailableAssistantsSelection;
    assistantss?: AvailableAssistantsConnectionSelection;
    internal?: AvailableInternalQueriesSelection;
    currentSession?: AvailableSessionSelection;
};
export type User = {
    __typename: 'User';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    resetPasswordTokenExpiration: (Scalars['DateTime'] | null);
    emailVerificationTokenExpiration: (Scalars['DateTime'] | null);
    googleProfileId: (Scalars['String'] | null);
    email: Scalars['EmailAddress'];
    resetPasswordToken: (Scalars['String'] | null);
    lastName: (Scalars['String'] | null);
    googleImageUrl: (Scalars['URL'] | null);
    emailVerificationToken: (Scalars['String'] | null);
    emailVerified: (Scalars['Boolean'] | null);
    firstName: (Scalars['String'] | null);
    roles: Role[];
    lastSignedIn: (Scalars['DateTime'] | null);
    /** The field documents is misconfigured and can't be accessed. Please correct any problems with the field in order to access it. */
    documents: (Scalars['GadgetMisconfiguredField'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableUserSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    resetPasswordTokenExpiration?: boolean | null | undefined;
    emailVerificationTokenExpiration?: boolean | null | undefined;
    googleProfileId?: boolean | null | undefined;
    email?: boolean | null | undefined;
    resetPasswordToken?: boolean | null | undefined;
    lastName?: boolean | null | undefined;
    googleImageUrl?: boolean | null | undefined;
    emailVerificationToken?: boolean | null | undefined;
    emailVerified?: boolean | null | undefined;
    firstName?: boolean | null | undefined;
    roles?: AvailableRoleSelection;
    lastSignedIn?: boolean | null | undefined;
    /** The field documents is misconfigured and can't be accessed. Please correct any problems with the field in order to access it. */
    documents?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {
    __typename: 'Role';
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key: Scalars['String'];
    /** The human readable name for this role. Can be changed. */
    name: Scalars['String'];
};
export type AvailableRoleSelection = {
    __typename?: boolean | null | undefined;
    /** The stable identifier for this role. Null if the role has since been deleted. */
    key?: boolean | null | undefined;
    /** The human readable name for this role. Can be changed. */
    name?: boolean | null | undefined;
};
/** A connection to a list of User items. */
export type UserConnection = {
    __typename: 'UserConnection';
    /** A list of edges. */
    edges: UserEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableUserConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableUserEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a User connection. */
export type UserEdge = {
    __typename: 'UserEdge';
    /** The item at the end of the edge */
    node: User;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableUserEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableUserSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Information about pagination in a connection. */
export type PageInfo = {
    __typename: 'PageInfo';
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean'];
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean'];
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null);
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null);
};
export type AvailablePageInfoSelection = {
    __typename?: boolean | null | undefined;
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | null | undefined;
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | null | undefined;
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | null | undefined;
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | null | undefined;
};
export type Session = {
    __typename: 'Session';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: (Scalars['GadgetID'] | null);
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    user: (User | null);
    userId: (Scalars['GadgetID'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableSessionSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    user?: AvailableUserSelection;
    userId?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of Session items. */
export type SessionConnection = {
    __typename: 'SessionConnection';
    /** A list of edges. */
    edges: SessionEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableSessionConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableSessionEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Session connection. */
export type SessionEdge = {
    __typename: 'SessionEdge';
    /** The item at the end of the edge */
    node: Session;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableSessionEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableSessionSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Document = {
    __typename: 'Document';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    file: StoredFile;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableDocumentSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    file?: AvailableStoredFileSelection;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** One file that has been stored and attached to a record */
export type StoredFile = {
    __typename: 'StoredFile';
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url: Scalars['String'];
    /** The content type of the file. */
    mimeType: Scalars['String'];
    /** The size of this file in bytes. */
    byteSize: Scalars['Int'];
    /** The size of this file in bytes. */
    humanSize: Scalars['String'];
    /** The file name of this file. */
    fileName: Scalars['String'];
};
export type AvailableStoredFileSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to retrieve the attached file. Gets the original, unmodified file. */
    url?: boolean | null | undefined;
    /** The content type of the file. */
    mimeType?: boolean | null | undefined;
    /** The size of this file in bytes. */
    byteSize?: boolean | null | undefined;
    /** The size of this file in bytes. */
    humanSize?: boolean | null | undefined;
    /** The file name of this file. */
    fileName?: boolean | null | undefined;
};
/** A connection to a list of Document items. */
export type DocumentConnection = {
    __typename: 'DocumentConnection';
    /** A list of edges. */
    edges: DocumentEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableDocumentConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableDocumentEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Document connection. */
export type DocumentEdge = {
    __typename: 'DocumentEdge';
    /** The item at the end of the edge */
    node: Document;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableDocumentEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableDocumentSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Threads = {
    __typename: 'Threads';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    metadata: (Scalars['JSON'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableThreadsSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    metadata?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of Threads items. */
export type ThreadsConnection = {
    __typename: 'ThreadsConnection';
    /** A list of edges. */
    edges: ThreadsEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableThreadsConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableThreadsEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Threads connection. */
export type ThreadsEdge = {
    __typename: 'ThreadsEdge';
    /** The item at the end of the edge */
    node: Threads;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableThreadsEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableThreadsSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Messages = {
    __typename: 'Messages';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    thread_id: (Scalars['String'] | null);
    role: (Scalars['String'] | null);
    content: (Scalars['String'] | null);
    file_ids: (Scalars['String'] | null);
    assistant_id: (Scalars['String'] | null);
    run_id: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableMessagesSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    thread_id?: boolean | null | undefined;
    role?: boolean | null | undefined;
    content?: boolean | null | undefined;
    file_ids?: boolean | null | undefined;
    assistant_id?: boolean | null | undefined;
    run_id?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of Messages items. */
export type MessagesConnection = {
    __typename: 'MessagesConnection';
    /** A list of edges. */
    edges: MessagesEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableMessagesConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableMessagesEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Messages connection. */
export type MessagesEdge = {
    __typename: 'MessagesEdge';
    /** The item at the end of the edge */
    node: Messages;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableMessagesEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableMessagesSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type Assistants = {
    __typename: 'Assistants';
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id: Scalars['GadgetID'];
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt: Scalars['DateTime'];
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt: Scalars['DateTime'];
    name: (Scalars['String'] | null);
    description: (Scalars['String'] | null);
    model: (Scalars['String'] | null);
    instructions: (Scalars['String'] | null);
    tools: (Scalars['String'] | null);
    file_ids: (Scalars['String'] | null);
    external_id: (Scalars['String'] | null);
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all: Scalars['JSONObject'];
};
export type AvailableAssistantsSelection = {
    __typename?: boolean | null | undefined;
    /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
    id?: boolean | null | undefined;
    /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
    createdAt?: boolean | null | undefined;
    /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
    updatedAt?: boolean | null | undefined;
    name?: boolean | null | undefined;
    description?: boolean | null | undefined;
    model?: boolean | null | undefined;
    instructions?: boolean | null | undefined;
    tools?: boolean | null | undefined;
    file_ids?: boolean | null | undefined;
    external_id?: boolean | null | undefined;
    /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
    _all?: boolean | null | undefined;
};
/** A connection to a list of Assistants items. */
export type AssistantsConnection = {
    __typename: 'AssistantsConnection';
    /** A list of edges. */
    edges: AssistantsEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableAssistantsConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableAssistantsEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a Assistants connection. */
export type AssistantsEdge = {
    __typename: 'AssistantsEdge';
    /** The item at the end of the edge */
    node: Assistants;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableAssistantsEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: AvailableAssistantsSelection;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
export type InternalQueries = {
    __typename: 'InternalQueries';
    user: (InternalUserRecord | null);
    listUser: InternalUserRecordConnection;
    session: (InternalSessionRecord | null);
    listSession: InternalSessionRecordConnection;
    document: (InternalDocumentRecord | null);
    listDocument: InternalDocumentRecordConnection;
    threads: (InternalThreadsRecord | null);
    listThreads: InternalThreadsRecordConnection;
    messages: (InternalMessagesRecord | null);
    listMessages: InternalMessagesRecordConnection;
    assistants: (InternalAssistantsRecord | null);
    listAssistants: InternalAssistantsRecordConnection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails: (Scalars['JSONObject'] | null);
};
export type AvailableInternalQueriesSelection = {
    __typename?: boolean | null | undefined;
    user?: boolean | null | undefined;
    listUser?: AvailableInternalUserRecordConnectionSelection;
    session?: boolean | null | undefined;
    listSession?: AvailableInternalSessionRecordConnectionSelection;
    document?: boolean | null | undefined;
    listDocument?: AvailableInternalDocumentRecordConnectionSelection;
    threads?: boolean | null | undefined;
    listThreads?: AvailableInternalThreadsRecordConnectionSelection;
    messages?: boolean | null | undefined;
    listMessages?: AvailableInternalMessagesRecordConnectionSelection;
    assistants?: boolean | null | undefined;
    listAssistants?: AvailableInternalAssistantsRecordConnectionSelection;
    /** Currently open platform transaction details, or null if no transaction is open */
    currentTransactionDetails?: boolean | null | undefined;
};
/** A connection to a list of InternalUserRecord items. */
export type InternalUserRecordConnection = {
    __typename: 'InternalUserRecordConnection';
    /** A list of edges. */
    edges: InternalUserRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalUserRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalUserRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalUserRecord connection. */
export type InternalUserRecordEdge = {
    __typename: 'InternalUserRecordEdge';
    /** The item at the end of the edge */
    node: InternalUserRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalUserRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {
    __typename: 'InternalSessionRecordConnection';
    /** A list of edges. */
    edges: InternalSessionRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalSessionRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalSessionRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {
    __typename: 'InternalSessionRecordEdge';
    /** The item at the end of the edge */
    node: InternalSessionRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalSessionRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalDocumentRecord items. */
export type InternalDocumentRecordConnection = {
    __typename: 'InternalDocumentRecordConnection';
    /** A list of edges. */
    edges: InternalDocumentRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalDocumentRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalDocumentRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalDocumentRecord connection. */
export type InternalDocumentRecordEdge = {
    __typename: 'InternalDocumentRecordEdge';
    /** The item at the end of the edge */
    node: InternalDocumentRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalDocumentRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalThreadsRecord items. */
export type InternalThreadsRecordConnection = {
    __typename: 'InternalThreadsRecordConnection';
    /** A list of edges. */
    edges: InternalThreadsRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalThreadsRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalThreadsRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalThreadsRecord connection. */
export type InternalThreadsRecordEdge = {
    __typename: 'InternalThreadsRecordEdge';
    /** The item at the end of the edge */
    node: InternalThreadsRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalThreadsRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalMessagesRecord items. */
export type InternalMessagesRecordConnection = {
    __typename: 'InternalMessagesRecordConnection';
    /** A list of edges. */
    edges: InternalMessagesRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalMessagesRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalMessagesRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalMessagesRecord connection. */
export type InternalMessagesRecordEdge = {
    __typename: 'InternalMessagesRecordEdge';
    /** The item at the end of the edge */
    node: InternalMessagesRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalMessagesRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** A connection to a list of InternalAssistantsRecord items. */
export type InternalAssistantsRecordConnection = {
    __typename: 'InternalAssistantsRecordConnection';
    /** A list of edges. */
    edges: InternalAssistantsRecordEdge[];
    /** Information to aid in pagination. */
    pageInfo: PageInfo;
};
export type AvailableInternalAssistantsRecordConnectionSelection = {
    __typename?: boolean | null | undefined;
    /** A list of edges. */
    edges?: AvailableInternalAssistantsRecordEdgeSelection;
    /** Information to aid in pagination. */
    pageInfo?: AvailablePageInfoSelection;
};
/** An edge in a InternalAssistantsRecord connection. */
export type InternalAssistantsRecordEdge = {
    __typename: 'InternalAssistantsRecordEdge';
    /** The item at the end of the edge */
    node: InternalAssistantsRecord;
    /** A cursor for use in pagination */
    cursor: Scalars['String'];
};
export type AvailableInternalAssistantsRecordEdgeSelection = {
    __typename?: boolean | null | undefined;
    /** The item at the end of the edge */
    node?: boolean | null | undefined;
    /** A cursor for use in pagination */
    cursor?: boolean | null | undefined;
};
/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {
    __typename: 'GadgetRole';
    key: Scalars['String'];
    name: Scalars['String'];
    selectable: Scalars['Boolean'];
    order: Scalars['Int'];
};
export type AvailableGadgetRoleSelection = {
    __typename?: boolean | null | undefined;
    key?: boolean | null | undefined;
    name?: boolean | null | undefined;
    selectable?: boolean | null | undefined;
    order?: boolean | null | undefined;
};
export type GadgetGlobalAction = {
    __typename: 'GadgetGlobalAction';
    name: Scalars['String'];
    apiIdentifier: Scalars['String'];
    requiresInput: Scalars['Boolean'];
    acceptsInput: Scalars['Boolean'];
    triggers: GadgetTrigger[];
    examples: (GadgetGlobalActionGraphQLType | null);
};
export type AvailableGadgetGlobalActionSelection = {
    __typename?: boolean | null | undefined;
    name?: boolean | null | undefined;
    apiIdentifier?: boolean | null | undefined;
    requiresInput?: boolean | null | undefined;
    acceptsInput?: boolean | null | undefined;
    triggers?: AvailableGadgetTriggerSelection;
    examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};
export type GadgetGlobalActionGraphQLType = {
    __typename: 'GadgetGlobalActionGraphQLType';
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation: Scalars['String'];
    exampleGraphQLMutation: Scalars['String'];
    inputGraphQLTypeSDL: (Scalars['String'] | null);
    outputGraphQLTypeSDL: Scalars['String'];
    inputTypeScriptInterface: (Scalars['String'] | null);
    outputTypeScriptInterface: Scalars['String'];
    exampleGraphQLVariables: Scalars['JSON'];
    exampleJSInputs: Scalars['JSON'];
    exampleImperativeInvocation: Scalars['String'];
    exampleReactHook: Scalars['String'];
};
export type AvailableGadgetGlobalActionGraphQLTypeSelection = {
    __typename?: boolean | null | undefined;
    /** @deprecated moved to exampleGraphQLMutation */
    exampleMutation?: boolean | null | undefined;
    exampleGraphQLMutation?: boolean | null | undefined;
    inputGraphQLTypeSDL?: boolean | null | undefined;
    outputGraphQLTypeSDL?: boolean | null | undefined;
    inputTypeScriptInterface?: boolean | null | undefined;
    outputTypeScriptInterface?: boolean | null | undefined;
    exampleGraphQLVariables?: boolean | null | undefined;
    exampleJSInputs?: boolean | null | undefined;
    exampleImperativeInvocation?: boolean | null | undefined;
    exampleReactHook?: boolean | null | undefined;
};
/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {
    __typename: 'DirectUploadToken';
    /** The URL to upload a file to. */
    url: Scalars['String'];
    /** The token to pass to an action to reference the uploaded file. */
    token: Scalars['String'];
};
export type AvailableDirectUploadTokenSelection = {
    __typename?: boolean | null | undefined;
    /** The URL to upload a file to. */
    url?: boolean | null | undefined;
    /** The token to pass to an action to reference the uploaded file. */
    token?: boolean | null | undefined;
};
export type Mutation = {
    __typename: 'Mutation';
    signUpUser: (SignUpUserResult | null);
    bulkSignUpUsers: (BulkSignUpUsersResult | null);
    signInUser: (SignInUserResult | null);
    bulkSignInUsers: (BulkSignInUsersResult | null);
    signOutUser: (SignOutUserResult | null);
    bulkSignOutUsers: (BulkSignOutUsersResult | null);
    updateUser: (UpdateUserResult | null);
    bulkUpdateUsers: (BulkUpdateUsersResult | null);
    deleteUser: (DeleteUserResult | null);
    bulkDeleteUsers: (BulkDeleteUsersResult | null);
    sendVerifyEmailUser: (SendVerifyEmailUserResult | null);
    bulkSendVerifyEmailUsers: (BulkSendVerifyEmailUsersResult | null);
    verifyEmailUser: (VerifyEmailUserResult | null);
    bulkVerifyEmailUsers: (BulkVerifyEmailUsersResult | null);
    sendResetPasswordUser: (SendResetPasswordUserResult | null);
    bulkSendResetPasswordUsers: (BulkSendResetPasswordUsersResult | null);
    resetPasswordUser: (ResetPasswordUserResult | null);
    bulkResetPasswordUsers: (BulkResetPasswordUsersResult | null);
    changePasswordUser: (ChangePasswordUserResult | null);
    bulkChangePasswordUsers: (BulkChangePasswordUsersResult | null);
    createDocument: (CreateDocumentResult | null);
    bulkCreateDocuments: (BulkCreateDocumentsResult | null);
    updateDocument: (UpdateDocumentResult | null);
    bulkUpdateDocuments: (BulkUpdateDocumentsResult | null);
    deleteDocument: (DeleteDocumentResult | null);
    bulkDeleteDocuments: (BulkDeleteDocumentsResult | null);
    createThreads: (CreateThreadsResult | null);
    bulkCreateThreads: (BulkCreateThreadsResult | null);
    updateThreads: (UpdateThreadsResult | null);
    bulkUpdateThreads: (BulkUpdateThreadsResult | null);
    deleteThreads: (DeleteThreadsResult | null);
    bulkDeleteThreads: (BulkDeleteThreadsResult | null);
    createMessages: (CreateMessagesResult | null);
    bulkCreateMessages: (BulkCreateMessagesResult | null);
    updateMessages: (UpdateMessagesResult | null);
    bulkUpdateMessages: (BulkUpdateMessagesResult | null);
    deleteMessages: (DeleteMessagesResult | null);
    bulkDeleteMessages: (BulkDeleteMessagesResult | null);
    createAssistants: (CreateAssistantsResult | null);
    bulkCreateAssistants: (BulkCreateAssistantsResult | null);
    updateAssistants: (UpdateAssistantsResult | null);
    bulkUpdateAssistants: (BulkUpdateAssistantsResult | null);
    deleteAssistants: (DeleteAssistantsResult | null);
    bulkDeleteAssistants: (BulkDeleteAssistantsResult | null);
    internal: (InternalMutations | null);
};
export type AvailableMutationSelection = {
    __typename?: boolean | null | undefined;
    signUpUser?: AvailableSignUpUserResultSelection;
    bulkSignUpUsers?: AvailableBulkSignUpUsersResultSelection;
    signInUser?: AvailableSignInUserResultSelection;
    bulkSignInUsers?: AvailableBulkSignInUsersResultSelection;
    signOutUser?: AvailableSignOutUserResultSelection;
    bulkSignOutUsers?: AvailableBulkSignOutUsersResultSelection;
    updateUser?: AvailableUpdateUserResultSelection;
    bulkUpdateUsers?: AvailableBulkUpdateUsersResultSelection;
    deleteUser?: AvailableDeleteUserResultSelection;
    bulkDeleteUsers?: AvailableBulkDeleteUsersResultSelection;
    sendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;
    bulkSendVerifyEmailUsers?: AvailableBulkSendVerifyEmailUsersResultSelection;
    verifyEmailUser?: AvailableVerifyEmailUserResultSelection;
    bulkVerifyEmailUsers?: AvailableBulkVerifyEmailUsersResultSelection;
    sendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;
    bulkSendResetPasswordUsers?: AvailableBulkSendResetPasswordUsersResultSelection;
    resetPasswordUser?: AvailableResetPasswordUserResultSelection;
    bulkResetPasswordUsers?: AvailableBulkResetPasswordUsersResultSelection;
    changePasswordUser?: AvailableChangePasswordUserResultSelection;
    bulkChangePasswordUsers?: AvailableBulkChangePasswordUsersResultSelection;
    createDocument?: AvailableCreateDocumentResultSelection;
    bulkCreateDocuments?: AvailableBulkCreateDocumentsResultSelection;
    updateDocument?: AvailableUpdateDocumentResultSelection;
    bulkUpdateDocuments?: AvailableBulkUpdateDocumentsResultSelection;
    deleteDocument?: AvailableDeleteDocumentResultSelection;
    bulkDeleteDocuments?: AvailableBulkDeleteDocumentsResultSelection;
    createThreads?: AvailableCreateThreadsResultSelection;
    bulkCreateThreads?: AvailableBulkCreateThreadsResultSelection;
    updateThreads?: AvailableUpdateThreadsResultSelection;
    bulkUpdateThreads?: AvailableBulkUpdateThreadsResultSelection;
    deleteThreads?: AvailableDeleteThreadsResultSelection;
    bulkDeleteThreads?: AvailableBulkDeleteThreadsResultSelection;
    createMessages?: AvailableCreateMessagesResultSelection;
    bulkCreateMessages?: AvailableBulkCreateMessagesResultSelection;
    updateMessages?: AvailableUpdateMessagesResultSelection;
    bulkUpdateMessages?: AvailableBulkUpdateMessagesResultSelection;
    deleteMessages?: AvailableDeleteMessagesResultSelection;
    bulkDeleteMessages?: AvailableBulkDeleteMessagesResultSelection;
    createAssistants?: AvailableCreateAssistantsResultSelection;
    bulkCreateAssistants?: AvailableBulkCreateAssistantsResultSelection;
    updateAssistants?: AvailableUpdateAssistantsResultSelection;
    bulkUpdateAssistants?: AvailableBulkUpdateAssistantsResultSelection;
    deleteAssistants?: AvailableDeleteAssistantsResultSelection;
    bulkDeleteAssistants?: AvailableBulkDeleteAssistantsResultSelection;
    internal?: AvailableInternalMutationsSelection;
};
export type SignUpUserResult = {
    __typename: 'SignUpUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableSignUpUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
/** The output when running the signUp on the user model in bulk. */
export type BulkSignUpUsersResult = {
    __typename: 'BulkSignUpUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results: (Scalars['JSON'] | null)[];
};
export type AvailableBulkSignUpUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results?: boolean | null | undefined;
};
export type SignInUserResult = {
    __typename: 'SignInUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
};
export type AvailableSignInUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
/** The output when running the signIn on the user model in bulk. */
export type BulkSignInUsersResult = {
    __typename: 'BulkSignInUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users: (User | null)[];
};
export type AvailableBulkSignInUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users?: AvailableUserSelection;
};
export type SignOutUserResult = {
    __typename: 'SignOutUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
};
export type AvailableSignOutUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
/** The output when running the signOut on the user model in bulk. */
export type BulkSignOutUsersResult = {
    __typename: 'BulkSignOutUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users: (User | null)[];
};
export type AvailableBulkSignOutUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users?: AvailableUserSelection;
};
export type UpdateUserResult = {
    __typename: 'UpdateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
};
export type AvailableUpdateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
/** The output when running the update on the user model in bulk. */
export type BulkUpdateUsersResult = {
    __typename: 'BulkUpdateUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users: (User | null)[];
};
export type AvailableBulkUpdateUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users?: AvailableUserSelection;
};
export type DeleteUserResult = {
    __typename: 'DeleteUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
/** The output when running the delete on the user model in bulk. */
export type BulkDeleteUsersResult = {
    __typename: 'BulkDeleteUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
export type SendVerifyEmailUserResult = {
    __typename: 'SendVerifyEmailUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableSendVerifyEmailUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
/** The output when running the sendVerifyEmail on the user model in bulk. */
export type BulkSendVerifyEmailUsersResult = {
    __typename: 'BulkSendVerifyEmailUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results: (Scalars['JSON'] | null)[];
};
export type AvailableBulkSendVerifyEmailUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results?: boolean | null | undefined;
};
export type VerifyEmailUserResult = {
    __typename: 'VerifyEmailUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableVerifyEmailUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
/** The output when running the verifyEmail on the user model in bulk. */
export type BulkVerifyEmailUsersResult = {
    __typename: 'BulkVerifyEmailUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results: (Scalars['JSON'] | null)[];
};
export type AvailableBulkVerifyEmailUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results?: boolean | null | undefined;
};
export type SendResetPasswordUserResult = {
    __typename: 'SendResetPasswordUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableSendResetPasswordUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
/** The output when running the sendResetPassword on the user model in bulk. */
export type BulkSendResetPasswordUsersResult = {
    __typename: 'BulkSendResetPasswordUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results: (Scalars['JSON'] | null)[];
};
export type AvailableBulkSendResetPasswordUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results?: boolean | null | undefined;
};
export type ResetPasswordUserResult = {
    __typename: 'ResetPasswordUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    result: (Scalars['JSON'] | null);
};
export type AvailableResetPasswordUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    result?: boolean | null | undefined;
};
/** The output when running the resetPassword on the user model in bulk. */
export type BulkResetPasswordUsersResult = {
    __typename: 'BulkResetPasswordUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results: (Scalars['JSON'] | null)[];
};
export type AvailableBulkResetPasswordUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of returned values for each action executed in the set of bulk actions. Returned in the same order as the input bulk action params. */
    results?: boolean | null | undefined;
};
export type ChangePasswordUserResult = {
    __typename: 'ChangePasswordUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (User | null);
};
export type AvailableChangePasswordUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: AvailableUserSelection;
};
/** The output when running the changePassword on the user model in bulk. */
export type BulkChangePasswordUsersResult = {
    __typename: 'BulkChangePasswordUsersResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users: (User | null)[];
};
export type AvailableBulkChangePasswordUsersResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed user records by each sent bulk action. Returned in the same order as the input bulk action params. */
    users?: AvailableUserSelection;
};
export type CreateDocumentResult = {
    __typename: 'CreateDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    document: (Document | null);
};
export type AvailableCreateDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    document?: AvailableDocumentSelection;
};
/** The output when running the create on the document model in bulk. */
export type BulkCreateDocumentsResult = {
    __typename: 'BulkCreateDocumentsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed document records by each sent bulk action. Returned in the same order as the input bulk action params. */
    documents: (Document | null)[];
};
export type AvailableBulkCreateDocumentsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed document records by each sent bulk action. Returned in the same order as the input bulk action params. */
    documents?: AvailableDocumentSelection;
};
export type UpdateDocumentResult = {
    __typename: 'UpdateDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    document: (Document | null);
};
export type AvailableUpdateDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    document?: AvailableDocumentSelection;
};
/** The output when running the update on the document model in bulk. */
export type BulkUpdateDocumentsResult = {
    __typename: 'BulkUpdateDocumentsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed document records by each sent bulk action. Returned in the same order as the input bulk action params. */
    documents: (Document | null)[];
};
export type AvailableBulkUpdateDocumentsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed document records by each sent bulk action. Returned in the same order as the input bulk action params. */
    documents?: AvailableDocumentSelection;
};
export type DeleteDocumentResult = {
    __typename: 'DeleteDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
/** The output when running the delete on the document model in bulk. */
export type BulkDeleteDocumentsResult = {
    __typename: 'BulkDeleteDocumentsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteDocumentsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
export type CreateThreadsResult = {
    __typename: 'CreateThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threads: (Threads | null);
};
export type AvailableCreateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threads?: AvailableThreadsSelection;
};
/** The output when running the create on the threads model in bulk. */
export type BulkCreateThreadsResult = {
    __typename: 'BulkCreateThreadsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed threads records by each sent bulk action. Returned in the same order as the input bulk action params. */
    threadss: (Threads | null)[];
};
export type AvailableBulkCreateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed threads records by each sent bulk action. Returned in the same order as the input bulk action params. */
    threadss?: AvailableThreadsSelection;
};
export type UpdateThreadsResult = {
    __typename: 'UpdateThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threads: (Threads | null);
};
export type AvailableUpdateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threads?: AvailableThreadsSelection;
};
/** The output when running the update on the threads model in bulk. */
export type BulkUpdateThreadsResult = {
    __typename: 'BulkUpdateThreadsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed threads records by each sent bulk action. Returned in the same order as the input bulk action params. */
    threadss: (Threads | null)[];
};
export type AvailableBulkUpdateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed threads records by each sent bulk action. Returned in the same order as the input bulk action params. */
    threadss?: AvailableThreadsSelection;
};
export type DeleteThreadsResult = {
    __typename: 'DeleteThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
/** The output when running the delete on the threads model in bulk. */
export type BulkDeleteThreadsResult = {
    __typename: 'BulkDeleteThreadsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
export type CreateMessagesResult = {
    __typename: 'CreateMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messages: (Messages | null);
};
export type AvailableCreateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messages?: AvailableMessagesSelection;
};
/** The output when running the create on the messages model in bulk. */
export type BulkCreateMessagesResult = {
    __typename: 'BulkCreateMessagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed messages records by each sent bulk action. Returned in the same order as the input bulk action params. */
    messagess: (Messages | null)[];
};
export type AvailableBulkCreateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed messages records by each sent bulk action. Returned in the same order as the input bulk action params. */
    messagess?: AvailableMessagesSelection;
};
export type UpdateMessagesResult = {
    __typename: 'UpdateMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messages: (Messages | null);
};
export type AvailableUpdateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messages?: AvailableMessagesSelection;
};
/** The output when running the update on the messages model in bulk. */
export type BulkUpdateMessagesResult = {
    __typename: 'BulkUpdateMessagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed messages records by each sent bulk action. Returned in the same order as the input bulk action params. */
    messagess: (Messages | null)[];
};
export type AvailableBulkUpdateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed messages records by each sent bulk action. Returned in the same order as the input bulk action params. */
    messagess?: AvailableMessagesSelection;
};
export type DeleteMessagesResult = {
    __typename: 'DeleteMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
/** The output when running the delete on the messages model in bulk. */
export type BulkDeleteMessagesResult = {
    __typename: 'BulkDeleteMessagesResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
export type CreateAssistantsResult = {
    __typename: 'CreateAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistants: (Assistants | null);
};
export type AvailableCreateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistants?: AvailableAssistantsSelection;
};
/** The output when running the create on the assistants model in bulk. */
export type BulkCreateAssistantsResult = {
    __typename: 'BulkCreateAssistantsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed assistants records by each sent bulk action. Returned in the same order as the input bulk action params. */
    assistantss: (Assistants | null)[];
};
export type AvailableBulkCreateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed assistants records by each sent bulk action. Returned in the same order as the input bulk action params. */
    assistantss?: AvailableAssistantsSelection;
};
export type UpdateAssistantsResult = {
    __typename: 'UpdateAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistants: (Assistants | null);
};
export type AvailableUpdateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistants?: AvailableAssistantsSelection;
};
/** The output when running the update on the assistants model in bulk. */
export type BulkUpdateAssistantsResult = {
    __typename: 'BulkUpdateAssistantsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
    /** The list of all changed assistants records by each sent bulk action. Returned in the same order as the input bulk action params. */
    assistantss: (Assistants | null)[];
};
export type AvailableBulkUpdateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
    /** The list of all changed assistants records by each sent bulk action. Returned in the same order as the input bulk action params. */
    assistantss?: AvailableAssistantsSelection;
};
export type DeleteAssistantsResult = {
    __typename: 'DeleteAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableDeleteAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
/** The output when running the delete on the assistants model in bulk. */
export type BulkDeleteAssistantsResult = {
    __typename: 'BulkDeleteAssistantsResult';
    /** Boolean describing if all the bulk actions succeeded or not */
    success: Scalars['Boolean'];
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors: ExecutionError[];
};
export type AvailableBulkDeleteAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    /** Boolean describing if all the bulk actions succeeded or not */
    success?: boolean | null | undefined;
    /** Aggregated list of errors that any bulk action encountered while processing */
    errors?: AvailableExecutionErrorSelection;
};
export type InternalMutations = {
    __typename: 'InternalMutations';
    startTransaction: Scalars['String'];
    commitTransaction: Scalars['String'];
    rollbackTransaction: Scalars['String'];
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock: LockOperationResult;
    createUser: (InternalCreateUserResult | null);
    updateUser: (InternalUpdateUserResult | null);
    deleteUser: (InternalDeleteUserResult | null);
    deleteManyUser: (InternalDeleteManyUserResult | null);
    bulkCreateUsers: (InternalBulkCreateUsersResult | null);
    triggerSignUpUser: (SignUpUserResult | null);
    triggerSignInUser: (SignInUserResult | null);
    triggerSignOutUser: (SignOutUserResult | null);
    triggerUpdateUser: (UpdateUserResult | null);
    triggerDeleteUser: (DeleteUserResult | null);
    triggerSendVerifyEmailUser: (SendVerifyEmailUserResult | null);
    triggerVerifyEmailUser: (VerifyEmailUserResult | null);
    triggerSendResetPasswordUser: (SendResetPasswordUserResult | null);
    triggerResetPasswordUser: (ResetPasswordUserResult | null);
    triggerChangePasswordUser: (ChangePasswordUserResult | null);
    createSession: (InternalCreateSessionResult | null);
    updateSession: (InternalUpdateSessionResult | null);
    deleteSession: (InternalDeleteSessionResult | null);
    deleteManySession: (InternalDeleteManySessionResult | null);
    bulkCreateSessions: (InternalBulkCreateSessionsResult | null);
    createDocument: (InternalCreateDocumentResult | null);
    updateDocument: (InternalUpdateDocumentResult | null);
    deleteDocument: (InternalDeleteDocumentResult | null);
    deleteManyDocument: (InternalDeleteManyDocumentResult | null);
    bulkCreateDocuments: (InternalBulkCreateDocumentsResult | null);
    triggerCreateDocument: (CreateDocumentResult | null);
    triggerUpdateDocument: (UpdateDocumentResult | null);
    triggerDeleteDocument: (DeleteDocumentResult | null);
    createThreads: (InternalCreateThreadsResult | null);
    updateThreads: (InternalUpdateThreadsResult | null);
    deleteThreads: (InternalDeleteThreadsResult | null);
    deleteManyThreads: (InternalDeleteManyThreadsResult | null);
    bulkCreateThreadss: (InternalBulkCreateThreadssResult | null);
    triggerCreateThreads: (CreateThreadsResult | null);
    triggerUpdateThreads: (UpdateThreadsResult | null);
    triggerDeleteThreads: (DeleteThreadsResult | null);
    createMessages: (InternalCreateMessagesResult | null);
    updateMessages: (InternalUpdateMessagesResult | null);
    deleteMessages: (InternalDeleteMessagesResult | null);
    deleteManyMessages: (InternalDeleteManyMessagesResult | null);
    bulkCreateMessagess: (InternalBulkCreateMessagessResult | null);
    triggerCreateMessages: (CreateMessagesResult | null);
    triggerUpdateMessages: (UpdateMessagesResult | null);
    triggerDeleteMessages: (DeleteMessagesResult | null);
    createAssistants: (InternalCreateAssistantsResult | null);
    updateAssistants: (InternalUpdateAssistantsResult | null);
    deleteAssistants: (InternalDeleteAssistantsResult | null);
    deleteManyAssistants: (InternalDeleteManyAssistantsResult | null);
    bulkCreateAssistantss: (InternalBulkCreateAssistantssResult | null);
    triggerCreateAssistants: (CreateAssistantsResult | null);
    triggerUpdateAssistants: (UpdateAssistantsResult | null);
    triggerDeleteAssistants: (DeleteAssistantsResult | null);
};
export type AvailableInternalMutationsSelection = {
    __typename?: boolean | null | undefined;
    startTransaction?: boolean | null | undefined;
    commitTransaction?: boolean | null | undefined;
    rollbackTransaction?: boolean | null | undefined;
    /** Acquire a backend lock, returning only once the lock has been acquired */
    acquireLock?: AvailableLockOperationResultSelection;
    createUser?: AvailableInternalCreateUserResultSelection;
    updateUser?: AvailableInternalUpdateUserResultSelection;
    deleteUser?: AvailableInternalDeleteUserResultSelection;
    deleteManyUser?: AvailableInternalDeleteManyUserResultSelection;
    bulkCreateUsers?: AvailableInternalBulkCreateUsersResultSelection;
    triggerSignUpUser?: AvailableSignUpUserResultSelection;
    triggerSignInUser?: AvailableSignInUserResultSelection;
    triggerSignOutUser?: AvailableSignOutUserResultSelection;
    triggerUpdateUser?: AvailableUpdateUserResultSelection;
    triggerDeleteUser?: AvailableDeleteUserResultSelection;
    triggerSendVerifyEmailUser?: AvailableSendVerifyEmailUserResultSelection;
    triggerVerifyEmailUser?: AvailableVerifyEmailUserResultSelection;
    triggerSendResetPasswordUser?: AvailableSendResetPasswordUserResultSelection;
    triggerResetPasswordUser?: AvailableResetPasswordUserResultSelection;
    triggerChangePasswordUser?: AvailableChangePasswordUserResultSelection;
    createSession?: AvailableInternalCreateSessionResultSelection;
    updateSession?: AvailableInternalUpdateSessionResultSelection;
    deleteSession?: AvailableInternalDeleteSessionResultSelection;
    deleteManySession?: AvailableInternalDeleteManySessionResultSelection;
    bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;
    createDocument?: AvailableInternalCreateDocumentResultSelection;
    updateDocument?: AvailableInternalUpdateDocumentResultSelection;
    deleteDocument?: AvailableInternalDeleteDocumentResultSelection;
    deleteManyDocument?: AvailableInternalDeleteManyDocumentResultSelection;
    bulkCreateDocuments?: AvailableInternalBulkCreateDocumentsResultSelection;
    triggerCreateDocument?: AvailableCreateDocumentResultSelection;
    triggerUpdateDocument?: AvailableUpdateDocumentResultSelection;
    triggerDeleteDocument?: AvailableDeleteDocumentResultSelection;
    createThreads?: AvailableInternalCreateThreadsResultSelection;
    updateThreads?: AvailableInternalUpdateThreadsResultSelection;
    deleteThreads?: AvailableInternalDeleteThreadsResultSelection;
    deleteManyThreads?: AvailableInternalDeleteManyThreadsResultSelection;
    bulkCreateThreadss?: AvailableInternalBulkCreateThreadssResultSelection;
    triggerCreateThreads?: AvailableCreateThreadsResultSelection;
    triggerUpdateThreads?: AvailableUpdateThreadsResultSelection;
    triggerDeleteThreads?: AvailableDeleteThreadsResultSelection;
    createMessages?: AvailableInternalCreateMessagesResultSelection;
    updateMessages?: AvailableInternalUpdateMessagesResultSelection;
    deleteMessages?: AvailableInternalDeleteMessagesResultSelection;
    deleteManyMessages?: AvailableInternalDeleteManyMessagesResultSelection;
    bulkCreateMessagess?: AvailableInternalBulkCreateMessagessResultSelection;
    triggerCreateMessages?: AvailableCreateMessagesResultSelection;
    triggerUpdateMessages?: AvailableUpdateMessagesResultSelection;
    triggerDeleteMessages?: AvailableDeleteMessagesResultSelection;
    createAssistants?: AvailableInternalCreateAssistantsResultSelection;
    updateAssistants?: AvailableInternalUpdateAssistantsResultSelection;
    deleteAssistants?: AvailableInternalDeleteAssistantsResultSelection;
    deleteManyAssistants?: AvailableInternalDeleteManyAssistantsResultSelection;
    bulkCreateAssistantss?: AvailableInternalBulkCreateAssistantssResultSelection;
    triggerCreateAssistants?: AvailableCreateAssistantsResultSelection;
    triggerUpdateAssistants?: AvailableUpdateAssistantsResultSelection;
    triggerDeleteAssistants?: AvailableDeleteAssistantsResultSelection;
};
export type LockOperationResult = {
    __typename: 'LockOperationResult';
    /** Whether the lock operation succeeded */
    success: Scalars['Boolean'];
    /** Any errors encountered during the locking/unlocking operation */
    errors: ExecutionError[];
};
export type AvailableLockOperationResultSelection = {
    __typename?: boolean | null | undefined;
    /** Whether the lock operation succeeded */
    success?: boolean | null | undefined;
    /** Any errors encountered during the locking/unlocking operation */
    errors?: AvailableExecutionErrorSelection;
};
export type InternalCreateUserResult = {
    __typename: 'InternalCreateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
};
export type AvailableInternalCreateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export type InternalUpdateUserResult = {
    __typename: 'InternalUpdateUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
};
export type AvailableInternalUpdateUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export type InternalDeleteUserResult = {
    __typename: 'InternalDeleteUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    user: (InternalUserRecord | null);
};
export type AvailableInternalDeleteUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    user?: boolean | null | undefined;
};
export type InternalDeleteManyUserResult = {
    __typename: 'InternalDeleteManyUserResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyUserResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateUsersResult = {
    __typename: 'InternalBulkCreateUsersResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    users: (InternalUserRecord | null)[];
};
export type AvailableInternalBulkCreateUsersResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    users?: boolean | null | undefined;
};
export type InternalCreateSessionResult = {
    __typename: 'InternalCreateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalCreateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalUpdateSessionResult = {
    __typename: 'InternalUpdateSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalUpdateSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalDeleteSessionResult = {
    __typename: 'InternalDeleteSessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    session: (InternalSessionRecord | null);
};
export type AvailableInternalDeleteSessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    session?: boolean | null | undefined;
};
export type InternalDeleteManySessionResult = {
    __typename: 'InternalDeleteManySessionResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManySessionResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateSessionsResult = {
    __typename: 'InternalBulkCreateSessionsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    sessions: (InternalSessionRecord | null)[];
};
export type AvailableInternalBulkCreateSessionsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    sessions?: boolean | null | undefined;
};
export type InternalCreateDocumentResult = {
    __typename: 'InternalCreateDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    document: (InternalDocumentRecord | null);
};
export type AvailableInternalCreateDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    document?: boolean | null | undefined;
};
export type InternalUpdateDocumentResult = {
    __typename: 'InternalUpdateDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    document: (InternalDocumentRecord | null);
};
export type AvailableInternalUpdateDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    document?: boolean | null | undefined;
};
export type InternalDeleteDocumentResult = {
    __typename: 'InternalDeleteDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    document: (InternalDocumentRecord | null);
};
export type AvailableInternalDeleteDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    document?: boolean | null | undefined;
};
export type InternalDeleteManyDocumentResult = {
    __typename: 'InternalDeleteManyDocumentResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyDocumentResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateDocumentsResult = {
    __typename: 'InternalBulkCreateDocumentsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    documents: (InternalDocumentRecord | null)[];
};
export type AvailableInternalBulkCreateDocumentsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    documents?: boolean | null | undefined;
};
export type InternalCreateThreadsResult = {
    __typename: 'InternalCreateThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threads: (InternalThreadsRecord | null);
};
export type AvailableInternalCreateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threads?: boolean | null | undefined;
};
export type InternalUpdateThreadsResult = {
    __typename: 'InternalUpdateThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threads: (InternalThreadsRecord | null);
};
export type AvailableInternalUpdateThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threads?: boolean | null | undefined;
};
export type InternalDeleteThreadsResult = {
    __typename: 'InternalDeleteThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threads: (InternalThreadsRecord | null);
};
export type AvailableInternalDeleteThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threads?: boolean | null | undefined;
};
export type InternalDeleteManyThreadsResult = {
    __typename: 'InternalDeleteManyThreadsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyThreadsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateThreadssResult = {
    __typename: 'InternalBulkCreateThreadssResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    threadss: (InternalThreadsRecord | null)[];
};
export type AvailableInternalBulkCreateThreadssResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    threadss?: boolean | null | undefined;
};
export type InternalCreateMessagesResult = {
    __typename: 'InternalCreateMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messages: (InternalMessagesRecord | null);
};
export type AvailableInternalCreateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messages?: boolean | null | undefined;
};
export type InternalUpdateMessagesResult = {
    __typename: 'InternalUpdateMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messages: (InternalMessagesRecord | null);
};
export type AvailableInternalUpdateMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messages?: boolean | null | undefined;
};
export type InternalDeleteMessagesResult = {
    __typename: 'InternalDeleteMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messages: (InternalMessagesRecord | null);
};
export type AvailableInternalDeleteMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messages?: boolean | null | undefined;
};
export type InternalDeleteManyMessagesResult = {
    __typename: 'InternalDeleteManyMessagesResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyMessagesResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateMessagessResult = {
    __typename: 'InternalBulkCreateMessagessResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    messagess: (InternalMessagesRecord | null)[];
};
export type AvailableInternalBulkCreateMessagessResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    messagess?: boolean | null | undefined;
};
export type InternalCreateAssistantsResult = {
    __typename: 'InternalCreateAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistants: (InternalAssistantsRecord | null);
};
export type AvailableInternalCreateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistants?: boolean | null | undefined;
};
export type InternalUpdateAssistantsResult = {
    __typename: 'InternalUpdateAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistants: (InternalAssistantsRecord | null);
};
export type AvailableInternalUpdateAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistants?: boolean | null | undefined;
};
export type InternalDeleteAssistantsResult = {
    __typename: 'InternalDeleteAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistants: (InternalAssistantsRecord | null);
};
export type AvailableInternalDeleteAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistants?: boolean | null | undefined;
};
export type InternalDeleteManyAssistantsResult = {
    __typename: 'InternalDeleteManyAssistantsResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
};
export type AvailableInternalDeleteManyAssistantsResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
};
export type InternalBulkCreateAssistantssResult = {
    __typename: 'InternalBulkCreateAssistantssResult';
    success: Scalars['Boolean'];
    errors: ExecutionError[];
    assistantss: (InternalAssistantsRecord | null)[];
};
export type AvailableInternalBulkCreateAssistantssResultSelection = {
    __typename?: boolean | null | undefined;
    success?: boolean | null | undefined;
    errors?: AvailableExecutionErrorSelection;
    assistantss?: boolean | null | undefined;
};
export type ExplicitNestingRequired = never;
export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined ? never : Schema extends (infer T)[] ? Select<T, Selection>[] : Schema extends null ? Select<Exclude<Schema, null>, Selection> | null : {
    [Key in keyof Selection & keyof Schema]: Selection[Key] extends true ? Schema[Key] : Selection[Key] extends FieldSelection ? Select<Schema[Key], Selection[Key]> : never;
};
export type IDsList = {
    ids: string[];
};
export {};
