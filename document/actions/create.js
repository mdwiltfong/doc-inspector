import {
  applyParams,
  save,
  ActionOptions,
  CreateDocumentActionContext,
} from "gadget-server";
import { OpenAIAssistant } from "../../helpers/OpenAIHelper";
import fetch from "node-fetch";
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
    const { assistant, file, id } = record;
    const gadgetAssistant = await api.assistants.findById(assistant);
    console.log("Gadget Assistant", gadgetAssistant);

    const currentAssistant = await OpenAIAssistant.retrieveAssistant(
      gadgetAssistant.openAiId
    );
    const document = await api.document.findById(id);
    console.log("Document: ", document);
    console.log("File: ", file);
    const response = await fetch(document.file.url);
    currentAssistant.uploadFile(response);
    const storeDoc = api.document.findById(id);
  } catch (error) {
    console.log(error);
  }
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};

async function fetchURLDoc(url) {
  const response = await fetch(url);
  fs.writeFileSync("test.txt", await response.buffer());
  return response.text();
}
