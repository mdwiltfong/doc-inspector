import { RouteContext } from "gadget-server";
import { OpenAIAssistant, Thread } from "../../helpers/OpenAIHelper";
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
  const { thread_id, message } = request.body;
  const storedThread = await api.threads.findById(thread_id);
  await Thread.addMessageToThread(storedThread.external_id, message);
  await reply.status(200).send({ message: "Message added" });
}
