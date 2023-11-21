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
    const { assistantId, id } = record;
    const gadgetAssistant = await api.assistants.findById(assistantId);
    console.log("Gadget Assistant", gadgetAssistant);
    const assistant = await OpenAIAssistant.retrieveAssistant(
      gadgetAssistant.openAiId
    );
    const document = await api.document.findById(id);
    console.log("Document", document);

    assistant.uploadFile(fetchURLDoc(document.file.url));
  } catch (error) {
    console.log(error);
  }
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};

async function fetchURLDoc(url) {
  try {
    const response = await fetch(url);
    return response.arrayBuffer();
  } catch (error) {
    console.log(error);
  }
}
