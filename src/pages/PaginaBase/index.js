import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Video from "componentes/Video";
import Inicio from "pages/Inicio";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Banner from "componentes/Banner";
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