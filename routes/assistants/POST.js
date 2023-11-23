import { RouteContext } from "gadget-server";

/**
 * Route handler for POST chat
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({
  request,
  reply,
  api,
  logger,
  connections,
}) {
  const { instructions, pdf, md } = request.body;
  const newAssistant = await api.assistants.create({
    name: "DocInspector",
    instructions: instructions,
    // [James] Add file IDs to create an assistant along with with files
    // file_ids: [pdf, md],
  });
  await reply.status(200).send({ assistant: newAssistant });
}
