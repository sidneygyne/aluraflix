import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import APP from "app";

function AppRoutes() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<APP />}>
                <Route index element={<Inicio />} />
                <Route path="addvideo" element={<Inicio />} />
                <Route path=":id" element={<Inicio />} />
                <Route path="*" element={ <Inicio />} />
            </Route>
        </Routes>
    </BrowserRouter>

  );
}

export default AppRoutes;
