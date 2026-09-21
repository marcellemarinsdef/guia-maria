import "dotenv/config";

import { createServer } from "../api/server.js";

const app = createServer();

const port = Number(process.env.PORT ?? 3000);

try {
  await app.listen({
    port,
    host: "0.0.0.0",
  });

  console.log(`Server running on http://localhost:${port}`);
} catch (error) {
  app.log.error(error);
  process.exit(1);
}