import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Root";
import Index from "./pages/Index";
import Daftar from "./pages/Daftar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Index />} />
      <Route path="/daftar" element={<Daftar />} />
    </Route>,
  ),
);

export default router;
