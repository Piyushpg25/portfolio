import { Hono } from "hono";
import { routes } from "./routes";
import { errorHandler } from "./middleware/error-handler";
import contactsRoute from "./routes/contacts";
import { cors } from "hono/cors";
import {requestLimit} from './middleware/request-limits';

const app = new Hono();

app.onError(errorHandler);

const allowedOrigin =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL
    : "http://localhost:3000";

app.use(
  "*",
  cors({
    origin: allowedOrigin ?? "http://localhost:3000",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("*", requestLimit)

app.get("/", (c) => {
  return c.json({
    message: "Portfolio API",
  });
});

app.get("/health", (c) => {
  return c.json({
    status: "OK",
  });
});


app.route("/", routes);
app.route("/api/contacts", contactsRoute);

export default app;
