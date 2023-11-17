/**
* This is the Gadget server side types library for:
*
*   ____               ___                           _
*  |  _ \  ___   ___  |_ _|_ __  ___ _ __   ___  ___| |_ ___  _ __
*  | | | |/ _ \ / __|  | || '_ \/ __| '_ \ / _ \/ __| __/ _ \| '__|
*  | |_| | (_) | (__   | || | | \__ \ |_) |  __/ (__| || (_) | |
*  |____/ \___/ \___| |___|_| |_|___/ .__/ \___|\___|\__\___/|_|
*                                   |_|
*
* Built for environment `Development` at version 498
* Framework version: ^0.2.0
* Edit this app here: https://doc-inspector.gadget.dev/edit
*/
import type { Client } from "@gadget-client/doc-inspector";
import { Logger } from "./AmbientContext";
export * from "./AccessControlMetadata";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
export * from "./auth";
export * from "./effects";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./models/User";
export * from "./models/Session";
export * from "./models/Document";
export * from "./models/Threads";
export * from "./models/Messages";
export * from "./models/Assistants";
/**
 * An instance of the Gadget logger
 */
declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */
declare let api: Client;
export { api, logger };
