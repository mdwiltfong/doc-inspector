import { Server } from "gadget-server";
import FastifyCors from "fastify-cors";

/**
 * Route plugin for *
 *
 * @param { Server } server - server instance to customize, with customizations scoped to descendant paths
 *
 * @see {@link https://www.fastify.dev/docs/latest/Reference/Server}
 */
export default async function (server) {
  await server.register(FastifyCors, {
    // allow CORS requests from any domain
    origin: true,
    // allow CORS requests from a specific domain
    // origin: ["https://my-domain"],
    // allow GET, POST, and PUT requests
    methods: ["GET", "POST", "PUT"],
    // other options, see here: https://www.npmjs.com/package/fastify-cors/v/6.0.3
  });
}
