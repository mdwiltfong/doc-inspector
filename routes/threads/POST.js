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
  await api.threads.create();
  await reply.status(200).send({ message: "Thread created" });
}
