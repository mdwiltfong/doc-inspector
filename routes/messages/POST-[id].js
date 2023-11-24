import { RouteContext } from "gadget-server";
import { Thread, Run } from "../../helpers/OpenAIHelper";
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
  const { id } = request.params;
  const { message } = request.body;
  console.log(id);
  const storedThread = await api.threads.findById(id, {
    select: {
      id: true,
      openAiId: true,
      external_assistant_id: {
        openAiId: true,
      },
    },
  });
  console.log("Stored Thread", storedThread);
  await Thread.addMessageToThread(storedThread.openAiId, message);
  console.log("stored thread", storedThread);
  const newRun = await Run.createRun(
    storedThread.external_assistant_id.openAiId,
    storedThread.openAiId
  );
  await reply.status(200).send({
    message: "Message added",
    run: { externalId: newRun.external_id, status: newRun.status },
  });
}
