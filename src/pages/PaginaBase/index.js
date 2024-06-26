import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </main>

    )

}

export default PaginaBase