import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { useTheme } from "@repo/ui/hooks/use-theme";
import { ChevronDown, Monitor, Moon, Sun } from "lucide-react";

function ModeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={className} variant="outline">
          {theme === "system" && (
            <>
              <Monitor />
              System
            </>
          )}
          {theme === "dark" && (
            <>
              <Moon />
              Dark
            </>
          )}
          {theme === "light" && (
            <>
              <Sun />
              Light
            </>
          )}
          <span className="sr-only">Toggle theme</span>
          <ChevronDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { ModeToggle };
