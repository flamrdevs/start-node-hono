import z from "zod";

const env = z
  .object({
    NODE_ENV: z.enum(["test", "development", "production"]).optional(),
    PORT: z
      .string()
      .transform((val, ctx) => {
        const parsed = parseInt(val);
        return isNaN(parsed) ? (ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Not a number" }), z.NEVER) : parsed;
      })
      .catch(3000),
    SECRET: z.string().catch("secret"),
  })
  .parse(process.env);

export default env;
