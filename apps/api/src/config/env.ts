const port = Number(process.env.PORT ?? 3001);

export const env = {
  PORT: port,
  NODE_ENV: process.env.NODE_ENV ?? "development",

  TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL ?? "",
  TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN ?? "",
} as const;
