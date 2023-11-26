import { RouteContext } from "gadget-server";
import { Run } from "../../helpers/OpenAIHelper";
import MarkdownParser from "../../helpers/MarkdownParser";
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
  const retrievedRun = await Run.retrieveRun(storedThread.openAiId, runId);
  if (retrievedRun.status === "requires_action") {
    const template = await api.document.findMany({
      filter: {
        assistantId: retrievedRun.external_assistant_id,
        role: "template",
      },
    });
    template[0].file.url;
  }
  await reply.status(200).send({ runStatus: retrievedRun.status });
}
