import { serve } from "bun";
import index from "./index.html";

const server = serve({
  port: 3000,
  routes: {
    "/*": index,
  },
});

console.log(`React SPA running at ${server.url}`);
