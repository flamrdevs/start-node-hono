import { serve } from "@hono/node-server";

import env from "~/env.ts";
import app from "~/app.ts";

console.log(`PORT : ${env.PORT}`);

serve({ fetch: app.fetch, port: env.PORT });
