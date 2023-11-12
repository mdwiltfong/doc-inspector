import { RouteContext, save } from "gadget-server";

/**
 * Route handler for create document
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({ request, reply, api, logger, connections, session }) {
  const { user, file } = request.body;
  await api.document.create({ user: user, file: file })
  await reply.send("File uploaded")
}


// import { applyParams, save, ActionOptions, CreateDocumentsActionContext } from "gadget-server";

// /**
//  * @param { CreateDocumentsActionContext } context
//  */
// export async function run({ params, record, logger, api, connections }) {
//   applyParams(params, record);
//   await save(record);
// };

// /**
//  * @param { CreateDocumentsActionContext } context
//  */
// export async function onSuccess({ params, record, logger, api, connections }) {
//   const pdf = record;

//   logger.info({ pdf }, "incoming PDF")
// };

/** @type { ActionOptions } */
export const options = {
  actionType: "create"
};
