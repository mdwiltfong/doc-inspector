import { RouteContext } from "gadget-server";
import { openAIResponseStream } from "gadget-server/ai";

/**
 * Route handler for POST chat
 *
 * @param { RouteContext } route context - see: https://docs.gadget.dev/guides/http-routes/route-configuration#route-context
 *
 */
export default async function route({ request, reply, api, logger, connections }) {
  const { message } = request.body;

  const stream = await connections.openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: message}],
    stream: true,
  });

  await reply.send(openAIResponseStream(stream));
}
