import { Button } from "@repo/ui/components/button";

function HomePage() {
  return (
    <div className="flex h-screen w-screen flex-col gap-4 items-center justify-center">
      <h1>Home</h1>
      <Button>Button</Button>
    </div>
  );
}

export { HomePage };
