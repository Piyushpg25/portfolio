import { Hono } from "hono";
import health from "./health";

const routes = new Hono();

routes.route("/health", health);

routes.get("/test-error", () => {
  throw new Error("test error");
});

export { routes };
