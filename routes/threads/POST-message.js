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
  console.log(`Thread ID in /threads/POST-message.js: ${thread_id}`)
  const storedThread = await api.threads.findById(thread_id);
  await Thread.addMessageToThread(storedThread.openAiId, message);   // [James] Switched (storedThread.external_id, message) with (storedThread.openAiId, message) -- it works!
  await reply.status(200).send({ message: "Message added" });
}
