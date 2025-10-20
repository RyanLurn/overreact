import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppProvider } from "@/components/providers";
import "@repo/ui/globals.css";

const rootElement = document.getElementById("root");
// Exist to make TS happy
if (!rootElement) {
  throw new Error('Root element with id "root" not found');
}

const app = (
  <StrictMode>
    <AppProvider />
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  if (
    import.meta.hot.data.root === null ||
    import.meta.hot.data.root === undefined
  ) {
    import.meta.hot.data.root = createRoot(rootElement);
  }
  const root = import.meta.hot.data.root;
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(rootElement).render(app);
}
