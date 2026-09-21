import Fastify from "fastify";

import { routes } from "./routes.js";

export function createServer() {
  const app = Fastify({
    logger: true,
  });

  app.register(routes, {
    prefix: "/api",
  });

  return app;
}