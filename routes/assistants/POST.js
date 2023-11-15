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
  const { instructions, model } = request.body;
  await api.assistants.create({
    name: "DocInspector",
    model: model,
    instructions: instructions,
  });
  await reply.status(200).send({ message: "Assistant created" });
}
