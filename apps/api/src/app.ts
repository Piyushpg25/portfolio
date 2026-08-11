import { Hono } from "hono";
import { routes } from "./routes";
import {errorHandler} from './middleware/error-handler';
import contactsRoute from './routes/contacts';

const app = new Hono();

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

app.onError(errorHandler);
app.route("/", routes);
app.route("/api/contacts", contactsRoute);

export default app;