import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Error404 from "../pages/Error404";
import ChangeColor from "../pages/ChangeColor";

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/color" element={<ChangeColor />} />

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
