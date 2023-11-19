import { RouteContext } from "gadget-server";
import { Run } from "../../helpers/OpenAIHelper";
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
  const { runId, threadId } = request.query;
  const storedThread = await api.threads.findById(threadId);
  const retrievedRun=await Run.retrieveRunStatus(runId, storedThread.openAiId)
  await reply.status(200).send({ runStatus:retrievedRun.status  });
}
