import { Hono } from "hono";
import { routes } from "./routes";
import {errorHandler} from './middleware/error-handler';

const app = new Hono();

app.onError(errorHandler);

app.route("/", routes);

export default app;