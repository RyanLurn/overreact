import { ModeToggle } from "@repo/ui/components/utils/mode-toggle";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="h-screen w-screen">
      <ModeToggle className="fixed top-3 right-3 z-50" />
      <Outlet />
    </div>
  );
}

export { RootLayout };
