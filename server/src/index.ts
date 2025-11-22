import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { node } from "@elysiajs/node";
import { openapi } from "@elysiajs/openapi";
import router from "./router.js";

const setup = () => {
  const app = new Elysia({ adapter: node() });
  app
    .get("/", () => "Hello World")
    .use(cors())
    .use(openapi())
    .use(router);

  return app;
};

export const app = setup();
export default app;
