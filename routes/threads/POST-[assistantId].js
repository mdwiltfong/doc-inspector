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
  const { assistantId } = request.params;
  const newThread = await api.threads.create({
    external_assistant_id: {
      _link:assistantId
    }
  });
  await reply.status(200).send({ thread: newThread });
}
