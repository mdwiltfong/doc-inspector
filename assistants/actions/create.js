import {
  applyParams,
  save,
  ActionOptions,
  CreateAssistantsActionContext,
} from "gadget-server";
import { OpenAIAssistant } from "../../helpers/OpenAIHelper";

/**
 * @param { CreateAssistantsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  record.tools = JSON.stringify([{ type: "retrieval" }]);
  applyParams(params, record);
  await save(record);
}

/**
 * @param { CreateAssistantsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const { instructions, model } = record;
  const assistant = await OpenAIAssistant.createAssistant(model, instructions);
  console.log("assistant", assistant);
  await api.assistants.update(record.id, { openAiId: assistant.openAIId });


  console.log("openai assistant id", assistant.openAIId);

  await api.assistants.update(record.id, { openAiId: assistant.openAIId });

  console.log("openai assistant id", assistant.id);

}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
