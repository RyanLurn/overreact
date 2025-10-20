import { defineConfig } from "drizzle-kit";
import { envVars } from "@/lib/env-vars";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema",
  dialect: "sqlite",
  dbCredentials: {
    url: envVars.DB_FILE_NAME,
  },
});
