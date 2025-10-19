import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <header>Welcome to overReact</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { RootLayout };
