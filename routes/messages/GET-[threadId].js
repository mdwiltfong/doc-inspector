import { RouteContext } from "gadget-server";
import { Run, Thread } from "../../helpers/OpenAIHelper";
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
  const { threadId } = request.params;
  const storedThread = await api.threads.findById(threadId);
  console.log(storedThread);
  const thread = new Thread(storedThread.openAiId, storedThread.createdAt);

  await reply.status(200).send({ messages: await thread.getMessages() });
}
