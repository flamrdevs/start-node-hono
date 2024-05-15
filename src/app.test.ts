import { describe, expect, it } from "vitest";

import { Hono } from "hono";

import z from "zod";

import app from "~/app.ts";

const request = async (app: Hono, path: string) => {
  const res = await app.request(path);
  return {
    json: () => res.json(),
  };
};

describe("app", () => {
  it("/", async () => {
    const { json } = await request(app, "/");

    expect(z.object({ name: z.string() }).safeParse(await json()).success).toBeTruthy();
  });
});
