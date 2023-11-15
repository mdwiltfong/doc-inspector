import { applyParams, save, ActionOptions, CreateDocumentActionContext } from "gadget-server";

/**
 * @param { CreateDocumentActionContext } context
 */
export async function run({ params, record, logger, api, connections }) {
  logger.info(record)
  applyParams(params, record);
  await save(record);
};

/**
 * @param { CreateDocumentActionContext } context
 */
export async function onSuccess({ params, record, logger, api, connections }) {
  const pdf = record;
  
  logger.info({pdf}, "incoming PDF")
};

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
