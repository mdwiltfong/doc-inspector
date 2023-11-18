import {
  applyParams,
  save,
  ActionOptions,
  CreateDocumentActionContext,
} from "gadget-server";
import { OpenAIAssistant } from "../../helpers/OpenAIHelper";
import fs from "fs";

/**
 * @param { CreateDocumentActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  logger.info(record);
  applyParams(params, record);
  await save(record);
}

/**
 * @param { CreateDocumentActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  try {
    const { assistantId, fileId } = record;
    const gadgetAssistant = await api.assistants.get(assistantId);
    const assistant = await OpenAIAssistant.retrieveAssistant(
      gadgetAssistant.external_id
    );

    const document = await api.document.get(fileId);
    // This document will only have the URL of the file stored in the cloud. `.createReadStream` might not be able to inherently conver the documewnt into a stream by just passing the URL.
    assistant.uploadFile(fs.createReadStream(document));
  } catch (error) {}
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
