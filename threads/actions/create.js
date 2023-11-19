import {
  applyParams,
  save,
  ActionOptions,
  CreateThreadsActionContext,
} from "gadget-server";
import { Thread } from "../../helpers/OpenAIHelper";
/**
 * @param { CreateThreadsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
}

/**
 * @param { CreateThreadsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const newThread = await Thread.createThread();
  console.log("New Thread", newThread);
  const updatedThread = await api.threads.update(record.id, {
    openAiId: newThread.external_thread_id,
  });

  console.log("Updated Thread", updatedThread);
}

/** @type { ActionOptions } */
export const options = {
  actionType: "create",
};
