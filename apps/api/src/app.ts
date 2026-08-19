import { Hono } from "hono";
import { routes } from "./routes";
import { errorHandler } from "./middleware/error-handler";
import contactsRoute from "./routes/contacts";
import { cors } from "hono/cors";
import {requestLimit} from './middleware/request-limits';
import { contactRateLimit } from "./middleware/rate-limit";

const app = new Hono();

app.onError(errorHandler);

const allowedOrigins = [
  "http://localhost:3000",
  "https://portfolio-web-gamma-henna.vercel.app",
  process.env.FRONTEND_URL,
].filter(
  (origin): origin is string =>
    typeof origin === "string" &&
    origin.length > 0,
);

app.use(
  "*",
  cors({
    origin: (origin) => {
      if (!origin) {
        return allowedOrigins[0] ?? "";
      }

      return allowedOrigins.includes(origin)
        ? origin
        : "";
    },

    allowMethods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],

    allowHeaders: [
      "Content-Type",
      "Authorization",
    ],
  }),
);

app.use("*", requestLimit)

app.use("/api/contacts", contactRateLimit);

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
