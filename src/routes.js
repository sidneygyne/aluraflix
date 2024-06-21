import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" >
            <Route index />
            <Route path=":id"/>
            <Route path="*"/>
        </Route>
    </Routes>
</BrowserRouter>
  );
}

export default AppRoutes;
