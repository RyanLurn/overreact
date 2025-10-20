import { drizzle } from "drizzle-orm/libsql";
import * as taskSchema from "@/db/schema/task";
import { envVars } from "@/lib/env-vars";

const db = drizzle({
  connection: { url: envVars.DB_FILE_NAME },
  schema: { ...taskSchema },
});

export { db };
