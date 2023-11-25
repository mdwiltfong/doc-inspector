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
  const { name, description, role, assistantId } = request.body;
  const data = {
    name,
    role,
    assistantId,
  };
  console.log(data);

  const fileContents = JSON.stringify(data);
  const bufferedContent = Buffer.from(fileContents).toString("base64");
  console.log("buffered Content", bufferedContent);
  const newDocument = await api.document.create({
    file: {
      // set the filename
      fileName: data.name,
      // base64 encode the file contents to pass to Gadget
      base64: bufferedContent,
    },
    role: data.role,
    assistant: {
      _link: data.assistantId,
    },
  });
  await reply.status(200).send({ document: newDocument });
}
