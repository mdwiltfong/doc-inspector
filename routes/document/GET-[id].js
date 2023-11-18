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
  const { id } = request.params;
  const storedDoc = await api.document.findById(id);
  console.log("Stored Doc", storedDoc);
  await reply.status(200).send({ document: storedDoc });
}
