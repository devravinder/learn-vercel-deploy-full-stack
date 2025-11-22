import { Elysia } from "elysia";

const chatRouter = new Elysia({ prefix: "/api" });

chatRouter
.get("/", () => ({message: "Hello World "+process.env.APP_VERSION}));


export default chatRouter;
