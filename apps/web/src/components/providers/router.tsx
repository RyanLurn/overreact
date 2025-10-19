import { BrowserRouter, Route, Routes } from "react-router";
import { RootLayout } from "@/components/layouts/root";
import { HomePage } from "@/components/pages/home";

function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { RouterProvider };
