import { applyParams, save, ActionOptions, CreateDocumentsActionContext } from "gadget-server";

/**
 * @param { CreateDocumentsActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateDocumentsActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const pdf = record;

  logger.info({pdf}, "incoming PDF")
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
