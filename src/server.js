import { startModels } from "./models/index.js";
import serverless from "serverless-http";
import config from "./config/config.js";
import app from "./app.js";

await startModels();

if (process.env.SERVERLESS === "false") {
  const PORT = config.port;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export const handler = serverless(app);
