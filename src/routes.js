import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NovoVideo from "pages/NovoVideo";
import PaginaBase from "pages/PaginaBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />} />
          <Route path="addvideo" element={<NovoVideo />} />
          <Route path=":id" element={<Inicio />} />
          <Route path="*" element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
