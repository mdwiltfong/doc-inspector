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
  const assistant = await new OpenAIAssistant(
    model,
    instructions
  ).createAssistant();

  await api.assistants.update(record.id, { external_id: assistant.id });

  console.log("openai assistant id", assistant.id);
  console.log("assistant", assistant);
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
