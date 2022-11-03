import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/layout";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
