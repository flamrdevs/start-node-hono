import { Hono } from "hono";
import { cors } from "hono/cors";

import env from "~/env.ts";

const app = new Hono();

app.notFound((ctx) => {
  return ctx.json({ message: "Not found" }, 404);
});

app.onError((err, ctx) => {
  let message = "Error";
  if (err instanceof Error) message = err.message;
  return ctx.json({ message }, 500);
});

app.use(cors());

app.get("/", (ctx) => {
  return ctx.json({ name: "start-node-hono" });
});

app.get("/env", (ctx) => {
  return ctx.json(env);
});

app.get("/throw", () => {
  throw new Error("Oops!");
});

export default app;
