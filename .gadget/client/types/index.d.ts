/**
* This is the Gadget API client library for:
*
*       _                 _                           _
*    __| | ___   ___     (_)_ __  ___ _ __   ___  ___| |_ ___  _ __
*   / _` |/ _ \ / __|____| | '_ \/ __| '_ \ / _ \/ __| __/ _ \| '__|
*  | (_| | (_) | (_|_____| | | | \__ \ |_) |  __/ (__| || (_) | |
*   \__,_|\___/ \___|    |_|_| |_|___/ .__/ \___|\___|\__\___/|_|
*                                    |_|
*
* Built for environment "Development" at version 1610
* API docs: https://docs.gadget.dev/api/doc-inspector
* Edit this app here: https://doc-inspector.gadget.app/edit
*/
export { BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord, GadgetRecordList, GadgetValidationError, InvalidRecordError } from "@gadgetinc/api-client-core";
export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";
export * from "./Client.js";
export * from "./types.js";
declare global {
    interface Window {
        gadgetConfig: {
            apiKeys: {
                shopify: string;
            };
            environment: string;
            env: Record<string, any>;
            authentication?: {
                signInPath: string;
                redirectOnSuccessfulSignInPath: string;
            };
        };
    }
}
