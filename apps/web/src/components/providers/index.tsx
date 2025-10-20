import { ThemeProvider } from "@repo/ui/components/providers/theme";
import { RouterProvider } from "@/components/providers/router";

function AppProvider() {
  return (
    <ThemeProvider defaultTheme="dark">
      <RouterProvider />
    </ThemeProvider>
  );
}

export { AppProvider };
